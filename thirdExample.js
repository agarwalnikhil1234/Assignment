const puppeteer = require("puppeteer");

(async () => {
    try {
        var browser = await puppeteer.launch({ headless: false });
        const context = await browser.createIncognitoBrowserContext();
        var page = await context.newPage();
        await page.goto('https://www.makemytrip.com/');
        await page.setViewport({ width: 1000, height: 500 })
        //await page.$eval('//input[@id="fromCity"]', el => el.click());
        await page.click('[id="fromCity"]');
        await page.type('[placeholder="From"]','Mumbai')
        await page.click('[id="react-autowhatever-1-section-0-item-0"]');
        await page.type('[placeholder="To"]','Delhi')
        await page.click('[id="react-autowhatever-1-section-0-item-0"]');
        await page.click('[class="lbl_input latoBold appendBottom10"]');
        await page.click('[class="primaryBtn font24 latoBlack widgetSearchBtn "]');
        await getScreenshot(page);
        //await browser.close();
        Console.log(success("Browser Closed"));
    }
    catch (err) {

    }
}
)();

let getScreenshot = async (page) => {
     page.screenshot({ path: "example.png" });
};