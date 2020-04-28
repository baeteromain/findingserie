const scrapper = require('./scrapper')


;(async () => {
  const buffer = await scrapper('https://www.oxtorrent.com/torrents/series') 
  console.log(buffer)
  return buffer
  
})()