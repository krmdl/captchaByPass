import puppeteer from "puppeteer-extra";
import RecaptchaPlugin from "puppeteer-extra-plugin-recaptcha"
import bypass from "./captchaBypasser.js"


puppeteer.use(RecaptchaPlugin({
    provider:{
        fn:bypass,
    },}))


puppeteer.launch({headless: false}).then(async (browser) => {
    const page = await browser.newPage()
    await page.goto("https://wsform.com/knowledgebase/hcaptcha/")
    console.log("solving...")
    await page.solveRecaptchas()

})