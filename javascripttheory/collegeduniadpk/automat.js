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
        await tab.goto("https://www.collegedunia.com");
       // await tab.waitForNavigation({waitUntil: 'networkidle2'});
       
        // let selectgoal = await tab.$("button.jsx-3851299306.text-left");
        // await selectgoal.click();
       
        //await tab.waitForNavigation({waitUntil: 'load'})
        // await setTimeout(async()=>{
        //     let selectcourse = await tab.$$("button.jsx-1016423636");
        //     //await console.log(selectcourse.length);
        //     await selectcourse[0].click();
        // },4000)
        // let searchicon=await tab.$("svg.cd-nav-menu-links-icon");
        // await console.log(searchicon);
        // await searchicon.click();
      //  let searchbar=await tab.$(".jsx-2722606122.pl-5.py-5.pr-5.search-input")
       // await console.log(searchbar)
//await searchbar.();
        //await searchbar.click();
       // let searchicon=await tab.$("svg.")
    //    let selectbtech = await tab.$$(".cd-nav-menu-links.js-cd-nav-menu-links");
    //    await console.log(selectbtech.length);
    //    await selectbtech[0].click()
       await tab.$$eval(".cd-nav-menu-links.js-cd-nav-menu-links", el => el[0].click());
       await tab.waitForNavigation();
       await tab.$eval('[title="Top BE/B.Tech Colleges In Ghaziabad"]',el=>el.click())
      //  await console.log(searchcity);
      //  let searchcity=await tab.$$(".jsx-3107713825.search-box.border-0.text-sm.py-2.pl-2.font-weight-semi.text-uppercase")
      //  let citybar= await tab.$(searchcity[3]);
      //  await citybar.type('GHAZIABAD- [41]');


    }
    openbrowser();