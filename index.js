import puppeteer from 'puppeteer'

const svarogSite = 'https://fantlab.ru/work7754'
const books = getList()

async function getList() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(svarogSite)

  const books = await page.$$eval('.dots > span > a', books => {
    return books.map(book => book.textContent)
                .filter(book => !book.startsWith('«'))
  })
  return books
}