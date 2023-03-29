const puppeteer = require("puppeteer");

const product_url = "https://www.amazon.in/dp/B08PS2KXJP/ref=cm_sw_em_r_mt_dp_1TN843HRKNEBZHWA9ZCD"
const productWebsite ="https://www.amazon.in/"

async function givePage(){
    const browser =  await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    return page;

}

// async function givePage2(){
//     const browser =  await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     return page;

// }
async function signIn(page){
    await page.goto(productWebsite);
    await page.waitForSelector("a[id='nav-link-accountList']");
    const input = await page.$("a[id='nav-link-accountList']");
    await input.click();
    await page.waitForTimeout(1000);
    await page.waitForSelector("input[id='ap_email']");
    await page.type('#ap_email', '8810396975',{delay: 100});
    await page.click("input[id='continue']");  
    await page.waitForTimeout(1000);
    await page.waitForSelector("input[id='ap_password']");
    await page.type('#ap_password', 'Sachin#123' ,{delay: 100}); //yanha password
    await page.click("input[id='signInSubmit']");
    
}

async function addToCart(page){
    await page.waitForTimeout(1000);
    await page.goto(product_url);
    await page.waitForTimeout(500);
    await page.waitForSelector("input[id='add-to-cart-button']");
    const input = await page.$("input[id='add-to-cart-button']");
    await input.click();
    await page.waitForSelector("a[id='hlb-ptc-btn-native']");
    const input2 = await page.$("a[id='hlb-ptc-btn-native']");
    await input2.click();
    // await page.waitForSelector("a[id='hlb-ptc-btn-native']");
    // const input3 = await page.$("a[id='hlb-ptc-btn-native']");
    // await input3.click();

}

async function checkout(){
    var page =  await givePage();
    await signIn(page);
    await addToCart(page);

}

checkout();