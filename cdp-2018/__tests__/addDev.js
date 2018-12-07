const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const user = {
    username : 'Util0',
    mail : 'util0@mail.com',
    password : 'Util00',
    dev : 'newdev@mail.com'
}

let browser
let page

beforeAll(async () => {
    browser = await puppeteer.launch(
      process.env.DEBUG
        ? {
            headless: false,
            slowMo: 20,
          }
        : {}
    )
    page = await browser.newPage();
  })

describe('Add a developper to a project', () => {
    test('Add developper', async (done) => {
      await page.goto(baseURL);

      await page.waitFor('#menu-connect');
      await page.click("#menu-connect");
      await page.waitFor('#form_email');
      await page.type("#form_email", user.mail);
      await page.waitFor('#form_password');
      await page.type("#form_password", user.password);
      await page.waitFor('#form_button');
      await page.click("#form_button");

      await page.waitFor('[name="id"]');
      await page.click('[name="id"]');
      await page.waitFor('[href="/settings"]');
      await page.click('[href="/settings"]');
      await page.waitFor('[onclick="javascript:showModalAddDev();"]');
      await page.click('[onclick="javascript:showModalAddDev();"]');
      await page.waitFor(500);
      await page.waitFor('#form_email');
      await page.type("#form_email", user.dev);
      await page.waitFor('#form_button');
      await page.click('#form_button');

      await page.waitFor('#menu-connect');
      await page.click("#menu-connect");

      done();
    })
})

afterAll(() => {
    browser.close()
})

jest.setTimeout(15000);
