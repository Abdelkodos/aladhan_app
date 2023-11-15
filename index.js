const fs = require('fs')
const readline = require('readline')
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')

/* Scraped site URL */
const url = 'https://lematin.ma/horaire-priere/'

app.use(cors({
	origin: '*',
  optionsSuccessStatus: 200
}))

app.get('/city/:id', (req, res) => {
	const { id } = req.params

	const scrapping = async (city) => {
		await axios(url + city).
					then(response => {
						const html = response.data
						const $ = cheerio.load(html)
						const content = []
	
						$('.content-ville', html).each(function () {
							let prays = $(this).find('.col-md-8').children().text()
							prays = prays.split("\n\n\n\n").join('",\n')
							prays = prays.split("\n\n\n").join(' "')
							prays = prays.split("\n\n").join('"')
							prays = prays.split('\\').join("")
							prays = prays.split('\"q').join('"')
							prays = prays.split('A').join('"A')
							prays = prays.split('""').join('"')
							prays = prays.split(': "').join('": "')
							prays = `{"id":${id},"city":"${city}",${prays}}`
	
							content.push({
								prays
							})
	
							res.send(JSON.parse(prays))
							console.log({prays})
						})
					}).catch((err) => console.log(err))
	}
	
		if ( id == 1 ) {
			scrapping("casablanca")
		}
		if ( id == 2 ) {
			scrapping("rabat")
		}
		if ( id == 3 ) {
			scrapping("fes")
		}
				
		if ( id == 4) {
				scrapping("tanger")
			}
		if ( id == 5 ) {
			scrapping("marrakech")
		}
			
		if ( id == 6 ) {
			scrapping("agadir")
		}
			
		if ( id == 7) {
			scrapping("meknes")
		}
			
		if ( id == 8 ) {
			scrapping("oujda")
		}
			
		if ( id == 9) {
			scrapping("laayoune")
		}
			
		if ( id == 10 ) {
			scrapping("dakhla")
		}
			
		if ( id == 11 ) {
			scrapping("essaouira")
		}
			
		if ( id == 12 ) {
			scrapping("temara")
		}
			
		if ( id == 13 ) {
			scrapping("tetouan")
		}
			
		if ( id == 14 ) {
			scrapping("alhoceima")
		}
			
		if ( id == 15 )
			scrapping("benimellal")

		if ( id == 16 )
			scrapping("nador")
			
		if ( id == 17 )
			scrapping("safi")
			
		if ( id == 18 )
			scrapping("khouribga")
				
		if ( id == 19 )
			scrapping("eljadida")
				
		if ( id == 20 )
			scrapping("berkane")

		if ( id == 21 )
			scrapping("taza")
			
		if ( id == 22 )
			scrapping("mohammedia")
			
		if ( id == 23 )
			scrapping("khemisset")
			
		if ( id == 24 )
			scrapping("errachidia")
			
		if ( id == 25 )
			scrapping("kenitra")
			
		if ( id == 26 )
			scrapping("larache")

		if ( id > 26 || id < 1)
			res.status(404).send({message : "there is no city with this number"})
   
})

app.listen(3000, () => console.log("Yeah I'm Running"))
