const puppeteer = require("puppeteer");
const chalk = require("chalk");

const error = chalk.bold.red;
const success = chalk.keyword("green");

(async () => {
    try {
        var browser = await puppeteer.launch({ headless: false });
        const context = await browser.createIncognitoBrowserContext();
        // Create a new page in a pristine context.
        const page = await context.newPage();

        await page.goto('https:\\www.google.com');
        await page.setViewport({width: 1000, height: 500})
        await page.screenshot({ path: "example.png" });

        await browser.close();
        Console.log(success("Browser Closed"));
    }
    catch (err) {

    }
}
)();    