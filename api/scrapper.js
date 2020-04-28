const puppeteer = require('puppeteer')

module.exports = function (url) {
  return new Promise((resolve, reject) => {
    ;(async () => {
      const browser = await puppeteer.launch({
        // headless: true, // debug only
        args: ['--no-sandbox']
      })

      const page = await browser.newPage()

      await page.goto('https://www.oxtorrent.com/torrents/series')

      

      const buffer = await page.evaluate(() => 
      Array.from(document.querySelectorAll('div.maxi a'))
      .map(key => `${key.innerText.trim()} : ${key.href}`)
     );

      await browser.close()

      resolve(buffer)
    })()
  })
}