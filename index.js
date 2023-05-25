const fs = require('fs')
const readline = require('readline')
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()

/* Scraped site URL */
const url = 'https://www.yabiladi.ma/prieres/'

const saveData = async (content) => {
	await fs.writeFile('data.json', new Date() + "\n" + content, function (err) {
		if (err) throw err
		console.log('Saved!')
	})
}

const structData = (data) => {
	let cities = {}
	if (data.includes(":الرباط"))
	{
		cities.rabat = []
		let cityIndex = data.indexOf(":الرباط")
		console.log(cityIndex)
		console.log(data.indexOf("04:36"))
		console.log(data.indexOf("21:59"))
/*		for (let i = (cityIndex + 7);
		cities += '"rabat": ['
		for ( let i = (cityIndex + 7); i < (cityIndex + 40); i++)
		{
			for (let j = i; j < (i + 5); j++)
			{
				cities += `"${data.charAt(i) + data.charAt(i+1) + data.charAt(i+2) + data.charAt(i+3) + data.charAt(i+4) + data.charAt(i+5)}"`
			}
		}
		cities += "]}"
		console.log(cities)*/
	}
}

const splitString = (content) => {
	let arrcont = content.split("\t").join("-")
	arrcont = arrcont.split(" ").join("*")
	arrcont = arrcont.split("************************").join(":")
	arrcont = arrcont.split("**-***********\n").join("")
	arrcont = arrcont.split("---****").join("")
	arrcont = arrcont.split("---****\n").join("")
	arrcont = arrcont.split("---***\n").join("")
	arrcont = arrcont.split("-:").join(":")
	return arrcont
}

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
	    let praysSaved = "prays: " + splitString(content[0].prays)
	    console.log(praysSaved)
	    structData(praysSaved)
            res.send(praysSaved)
	    saveData(praysSaved)
        }).catch((err) => console.log(err))
})

app.listen(3000, () => console.log("Yeah I'm Running"))
