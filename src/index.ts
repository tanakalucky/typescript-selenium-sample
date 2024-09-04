import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const main = async () => {
    const options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--window-size=1920,1080');

    const serviceBuilder = new chrome.ServiceBuilder(process.env.CHROMEDRIVER_PATH);

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(serviceBuilder)
        .build();

    try {
        console.log('Navigating to Website...');
        await driver.get("https://www.google.com/")
    
        const title = await driver.getTitle();
        console.log(`Page title is: ${title}`);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        console.log('Quitting the driver...');
        await driver.quit();
        console.log('Driver quit successfully.');
    }
}

main();