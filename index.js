const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

const url = 'https://www.yabiladi.ma/prieres/'

app.get('/result', (req, res) => {
    axios(url).
        then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const content = []

            $('.corps', html).each(function () {
                
                const prays = $(this).find('table').children().text()
                content.push({
                    prays
                })
            })

            res.json(content)
        }).catch((err) => console.log(err))
})

app.listen(3000, () => console.log("Yeah I'm Running"))