const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const user = {
    username : 'util1',
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

describe('Login', () => {
    test('Login', async () => {
        await page.goto(baseURL);
        await page.click("#menu-connect");
    })
})

afterAll(() => {
    if (!process.env.DEBUG) {
      browser.close();
    }
  })
