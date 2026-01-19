const puppeteer = require("puppeteer");
const fs = require("fs");

const url = process.env.SCRAPE_URL;

(async () => {
  if (!url) {
    console.log("URL not provided");
    return;
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/usr/bin/chromium",
    args: ["--no-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(url);

  const data = await page.evaluate(() => {
    return {
      title: document.title
    };
  });

  fs.writeFileSync("scraped_data.json", JSON.stringify(data));

  await browser.close();
})();
