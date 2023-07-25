const { Builder, By, Key, until } = require('selenium-webdriver');

async function main() {
  // 웹 드라이버 생성 (Chrome 브라우저를 사용)
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. 로그인 페이지 열기
    await driver.get('https://katalkenglish.com/login#');
		await driver.sleep(1000);
    // 2. ID/PW 입력
    await driver.findElement(By.css('.ng-tns-c5-0')).sendKeys('gasiorowicz10@gmail.com');
	await driver.sleep(1000);
    await driver.findElement(By.css('.ng-tns-c5-1')).sendKeys('duruaal@123');
    // 엔터
    actions.sendKeys(firstStr).sendKeys(Key.ENTER).sendKeys(Key.ENTER).perform();
	await driver.sleep(100);
    await driver.get('https://katalkenglish.com/mypage#');

	await driver.sleep(1000);
    const imgtextstock = await driver.findElement(By.css('#imgtextstock'));


    console.log("끝");


  } catch (error) {
    console.error('Error:', error);
  } finally {
    // 브라우저를 닫습니다.
    await driver.quit();
  }
}

main();
