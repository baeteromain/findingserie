const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const scrapper = require('./scrapper')



app.get('/api/gettorrent', (req, res) => {
  const url = 'https://www.oxtorrent.com/torrents/series'
  ;(async () => {
    const buffer = await scrapper(url) 
  console.log(buffer)
  res.send(buffer)
    
  })()
})

app.listen(port, () => console.log(`app listening on port ${port}!`))