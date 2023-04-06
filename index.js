const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

const url = 'https://www.yabiladi.ma/prieres/'

app.get('/result', (req, res) => {
    axios(url).
        then(response => {
            const html = response.data
            console.log(html)
            const $ = cheerio.load(html)
            const content = []

            
        })
})

app.listen(3000, () => console.log("Yeah I'm Running"))