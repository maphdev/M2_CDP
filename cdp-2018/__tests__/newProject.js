const puppeteer = require('puppeteer');

const baseURL = 'http://localhost:8080';
const loginRoute = `${baseURL}/login`;
const user = {
    username : 'Util0',
    mail : 'util0@mail.com',
    password : 'Util00'
}

const project = {
  name : 'Projet 1',
  description : 'Test de projet 1',
  duration : '21',
  startingDay : '01/01/2018'
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

describe('Add a new project', () => {
    test('New project', async (done) => {
      await page.goto(baseURL);

      await page.waitFor('#menu-connect');
      await page.click("#menu-connect");
      await page.waitFor('#form_email');
      await page.type("#form_email", user.mail);
      await page.waitFor('#form_password');
      await page.type("#form_password", user.password);
      await page.waitFor('#form_button');
      await page.click("#form_button");

      await page.waitFor('#create-project-button');
      await page.click('#create-project-button');
      await page.waitFor('#form_name');
      await page.type("#form_name", project.name);
      await page.waitFor('#form_description');
      await page.type("#form_description", project.description);
      await page.waitFor('#form_sprint_length');
      await page.type("#form_sprint_length", project.duration);
      await page.waitFor('#form_start_day');
      await page.type("#form_start_day", project.startingDay);
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

jest.setTimeout(10000);
