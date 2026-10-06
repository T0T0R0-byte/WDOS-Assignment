const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });

  const captures = [
    { path: "index.html", out: "docs/screenshots/home.png" },
    { path: "doctors_page.html", out: "docs/screenshots/doctors.png" },
    { path: "pharmacy_page.html", out: "docs/screenshots/pharmacy.png" },
    { path: "consulting_reservation_page.html", out: "docs/screenshots/reservation.png" }
  ];

  for (const capture of captures) {
    await page.goto(`http://127.0.0.1:8000/${capture.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    fs.mkdirSync("docs/screenshots", { recursive: true });
    await page.screenshot({ path: capture.out, fullPage: false });
  }

  await browser.close();
})();
