const puppeteer = require('puppeteer');

describe('Welcome', () => {
  test('visually looks correct', async () => {
    // APIs from jest-puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:9001/iframe.html?selectedKind=Addons%2FKnobs&selectedStory=with%20text&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel');
    try {
      const image = await page.screenshot({fullPage: true});
      // API from jest-image-snapshot
      expect(image).toMatchImageSnapshot();
    } catch (e) {
      console.error(e);
    }

    await page.close();
    await browser.close();

  });
});
