import puppeteer from 'puppeteer'

const svarogSite = 'https://fantlab.ru/work7754'

async function getList() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(svarogSite)

  const element = await page.waitForSelector('.dots > span > a')

  console.log(element)

}

getList()