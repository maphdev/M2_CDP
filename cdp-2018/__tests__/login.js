const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
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
            slowMo: 50,
          }
        : {}
    )
    page = await browser.newPage()
  })

describe('Login', () => {
    test('Login', async () => {
        await page.goto(baseURL)
        await page.click("#menu-connect")
        await page.type('#form_email', user.mail)
        await page.type('#form_password', user.password)
        await page.click("#form_button")
    })
})

afterAll(() => {
    if (!process.env.DEBUG) {
      browser.close()
    }
  })
