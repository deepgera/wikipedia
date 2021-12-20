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
        //const tb=await tab.$$eval('#toc tr td b a', );
        await tab.goto("https://en.m.wikipedia.org/wiki/Special:AllPages/D");
        await tab.$$eval(".mw-allpages-chunk li a",e => e[0].click());
        //console.log(d.length)
        // const href = await tab.evaluate(() => {
        //     const table = document.querySelector('table');
        //     const tr = [...table.rows].find(({ cells }) => cells[0].innerText === "D");
        //     if (tr) return tr.cells[1].querySelector('a').href;
        //     return null;
        // })
       // await console.log(tb.length);
        // tr.map((value)=>{
        //     console.log(value.innerText);
        // })
        // tr.map(()=>{
        //     'td>tb>[title="Special:AllPages/D"]'))
        // await console.log(tr.length);
     //await href[13].click();
    }
    openbrowser()