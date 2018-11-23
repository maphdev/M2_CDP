const puppeteer = require('puppeteer');
var firebase = require("../database/authConfig.js").firebase;

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const user = {
    username : 'Util1',
    mail : 'Util1@mail.com',
    password : 'Util00'
}

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG
        ? {
            headless: false,
            //slowMo: 10,
          }
        : {}
    )
    page = await browser.newPage();
  })

describe('Login', () => {
    test('Login', async () => {
        await page.goto(baseURL);
        await page.waitFor('#menu-connect');
        await page.click("#menu-connect");
        await page.type("#form_email", user.mail);
        await page.type("#form_password", user.password);
        await page.waitFor('#form_button');
        await page.click("#form_button");
    })
})


afterAll(() => {
      browser.close();
  })
