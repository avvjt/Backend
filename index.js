const express = require('express')
require('dotenv').config()
// import express from('express')  --> alternative mordan call approch

const app = express()


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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
