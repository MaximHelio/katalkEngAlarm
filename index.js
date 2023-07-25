const { Builder, By, Key, until } = require('selenium-webdriver');
const nodemailer = require('nodemailer');

async function main() {
  // 웹 드라이버 생성 (Chrome 브라우저를 사용)
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. 로그인 페이지 열기
    await driver.get('https://katalkenglish.com/login#');
		await driver.sleep(2000);
        // 2. ID/PW 입력
    await driver.findElement(By.css('#mat-input-0')).sendKeys('gasiorowicz10@gmail.com');
	await driver.sleep(1000);
    await driver.findElement(By.css('#mat-input-1')).sendKeys('duruaal@123', Key.ENTER);
    // 엔터
    await driver.findElement(By.css('data-button')).click;

	await driver.sleep(100);
    await driver.get('https://katalkenglish.com/mypage#');
	const targetElement = await driver.findElement(By.css('.text'));
    if(await targetElement.isDisplayed()) {
        //요소가 존재하면 메일 보내기
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'gasiorowicz10@gmail.com',    //발신자 gmail계정
                pass: 'roselily1!'  // 발신자 gmail 계정 비밀번호
            }
        });

        const mailOptions = {
            from: 'gaisorowicz10@gmail.com',
            to: 'werghjkl333@naver.com',
            subject: '강의가 있습니다',
            text: targetElement
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log('메일 보내기 오류: ', error);
            } else {
                console.log('메일이 성공적으로 보내졌습니다.', info.response);
            }
        });
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // 브라우저를 닫습니다.
    await driver.quit();
  }
}

main();
