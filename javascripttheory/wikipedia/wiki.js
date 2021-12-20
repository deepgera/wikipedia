const puppy = require('puppeteer');


async function openbrowser(){
    const browser=await puppy.launch({
         headless: false,                   //browser visible
         defaultViewport: false,
         args:[
             '--start-maximized'              // you can also use '--start-fullscreen'
          ],
        });
        
        const tabs = await browser.pages();
        const tab = tabs[0];
        await tab.goto("https://www.wikipedia.org/");
        await tab.$eval("#js-link-box-en", el => el.click());
        //await tab.waitForNavigation();
        await tab.$eval('[title="Wikipedia:Contents/Portals"]', el => el.click());
        await tab.$$eval('[title="Wikipedia:Contents/A–Z index"]', el => el[0].click());
        //await tab.waitForNavigation();
        //await tab.$eval('[title="Special:AllPages/D"]', el => el.click());
        const href = await page.evaluate(() => {
            const table = document.querySelector('table');
            const tr = [...table.rows].find(({ cells }) => cells[0].innerText === "D");
            if (tr) return tr.cells[1].querySelector('a').href;
            return null;
        })
        await console.log(href)
    }
    openbrowser()