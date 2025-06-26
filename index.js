const express = require('express')
// import express from('express')  --> alternative mordan call approch

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/khushi', (req, res)=> {
res.send('i love you baby')
})

app.get(
    '/null', (req, res)=> {
        res.send('its me abhi')
    }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
