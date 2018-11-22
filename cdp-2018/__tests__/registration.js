const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const createAccountRoute = `${baseURL}/createAccount`;
const user = {
    username : 'Util1',
    mail : 'Util1@mail.com',
    password : 'Util01'
}

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG
        ? {
            headless: false,
            slowMo: 100,
          }
        : {}
    )
    page = await browser.newPage()
  })

describe('Registration', () => {
    test('Account creation', async () => {
        await page.goto(baseURL)
        await page.click("#menu-connect")
    })
})

afterAll(() => {
    if (!process.env.DEBUG) {
      browser.close()
    }
  })


