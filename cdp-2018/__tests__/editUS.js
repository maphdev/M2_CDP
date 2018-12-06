const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const user = {
    username : 'Util0',
    mail : 'util0@mail.com',
    password : 'Util00'
}

const us = {
  description : '-',
  difficulty : '5',
  priority : 'HIGH'
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

describe('Add a new US', () => {
    test('New US', async (done) => {
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
      await page.waitFor('[href="/backlog"]');
      await page.click('[href="/backlog"]');

      await page.waitFor('[onclick="javascript:showModifyModal(this.value);"]');
      await page.click('[onclick="javascript:showModifyModal(this.value);"]');
      await page.waitFor(500);
      await page.waitFor('#modif_desc');
      await page.type("#modif_desc", us.description);
      await page.waitFor('#modif_diff');
      await page.type("#modif_diff", us.difficulty);
      await page.waitFor('#modif_prio');
      await page.type("#modif_prio", us.priority);
      await page.waitFor('#modif_button');
      await page.click('#modif_button')

      await page.waitFor('#menu-connect');
      await page.click("#menu-connect");

      done();
    })
})

afterAll(() => {
    browser.close()
})

jest.setTimeout(10000);
