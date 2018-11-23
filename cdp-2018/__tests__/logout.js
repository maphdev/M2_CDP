const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const user = {
    username : 'Util0',
    mail : 'util0@mail.com',
    password : 'Util00'
}

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG
        ? {
            headless: false,
            //slowMo: 50,
          }
        : {}
    )
    page = await browser.newPage();
  })

describe('Logout', () => {
    test('Logout', async () => {
      await page.goto(baseURL);

      await page.waitFor('#menu-connect');
      await page.click("#menu-connect");
      await page.waitFor('#form_email');
      await page.type("#form_email", user.mail);
      await page.waitFor('#form_password');
      await page.type("#form_password", user.password);
      await page.waitFor('#form_button');
      await page.click("#form_button");

      await page.waitFor('#menu-connect');
      await page.click("#menu-connect");
    })
})

afterAll(() => {
    if (!process.env.DEBUG) {
      browser.close();
    }
  })

  jest.setTimeout(10000);
