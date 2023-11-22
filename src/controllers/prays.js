	// const cheerio = require('cheerio')
	// const axios = require("axios")
	// const fetch = require("node-fetch")
	import cheerio from 'cheerio'
	import axios from "axios"
	import fetch from "node-fetch"


	/* Cities and there id */
const cities = [
	{
		id: 1,
		name: "casablanca"
	},
	{
		id: 2,
		name: "rabat"
	},
	{
		id: 3,
		name: "fes"
	},
	{
		id: 4,
		name: "tanger"
	},
	{
		id: 5,
		name: "marrakech"
	},
	{
		id: 6,
		name: "agadir"
	},
	{
		id: 7,
		name: "meknes"
	},
	{
		id: 8,
		name: "oujda"
	},
	{
		id: 9,
		name: "laayoune"
	},
	{
		id: 10,
		name: "dakhla"
	},
	{
		id: 11,
		name: "essaouira"
	},
	{
		id: 12,
		name: "temara"
	},
	{
		id: 13,
		name: "tetouan"
	},
	{
		id: 14,
		name: "alhoceima"
	},
	{
		id: 15,
		name: "benimellal"
	},
	{
		id: 16,
		name: "nador"
	},
	{
		id: 17,
		name: "safi"
	},
	{
		id: 18,
		name: "khouribga"
	},
	{
		id: 19,
		name: "eljadida"
	},
	{
		id: 20,
		name: "berkane"
	},
	{
		id: 21,
		name: "taza"
	},
	{
		id: 22,
		name: "mohammedia"
	},
	{
		id: 23,
		name: "khemisset"
	},
	{
		id: 24,
		name: "errachidia"
	},
	{
		id: 25,
		name: "kenitra"
	},
	{
		id: 26,
		name: "larache"
	},
]


/* Scraped site URL */
		const url = 'https://lematin.ma/horaire-priere/'
	

const getAllAdhans = (req, res) => {
	
	let result = '['

	const scrappingPage = async (response, city) => {
		const html = await response.text()
						// console.log(html)
						const $ = cheerio.load(html)
							
							// const $ = cheerio.load(response.data)
							// console.log(response.data)
	
							$('.content-ville', response.data).each(function () {
								let prays = $(this).find('.col-md-8').children().text()
								prays = prays.split("\n\n\n\n").join('",\n')
								prays = prays.split("\n\n\n").join(' "')
								prays = prays.split("\n\n").join('"')
								prays = prays.split('\\').join("")
								prays = prays.split('\"q').join('"')
								prays = prays.split('A').join('"a')
								prays = prays.split('""').join('"')
								prays = prays.split(': "').join('": "')
								prays = prays.split('-').join('')
								prays = `{"id":${city.id},"city":"${city.name}","prays_times": {${prays}}}`
								// let serverRec = JSON.parse(prays)
								// response = JSON.parse(prays)
								// response.json()
								// res.json(JSON.parse(prays))
								
								result += prays
								
								// console.log(JSON.parse(prays))
							})
	}

	
Promise.all(
	[
		fetch(url+cities[0].name).then(async response => {
				await scrappingPage(response, cities[0])
				}).catch((err) => console.log(err)),
		fetch(url+cities[1].name).then(async response => {
			await scrappingPage(response, cities[1])
		}).catch((err) => console.log(err)),
		fetch(url+cities[2].name).then(async response => {
			await scrappingPage(response, cities[2])
		}).catch((err) => console.log(err)),
		fetch(url+cities[3].name).then(async response => {
			await scrappingPage(response, cities[3])
		}).catch((err) => console.log(err)),
		fetch(url+cities[4].name).then(async response => {
			await scrappingPage(response, cities[4])
		}).catch((err) => console.log(err)),
		fetch(url+cities[5].name).then(async response => {
			await scrappingPage(response, cities[5])
		}).catch((err) => console.log(err)),
		fetch(url+cities[6].name).then(async response => {
			await scrappingPage(response, cities[6])
		}).catch((err) => console.log(err)),
		fetch(url+cities[7].name).then(async response => {
			await scrappingPage(response, cities[7])
		}).catch((err) => console.log(err)),
		fetch(url+cities[8].name).then(async response => {
			await scrappingPage(response, cities[8])
		}).catch((err) => console.log(err)),
		fetch(url+cities[9].name).then(async response => {
			await scrappingPage(response, cities[9])
		}).catch((err) => console.log(err)),
		fetch(url+cities[10].name).then(async response => {
			await scrappingPage(response, cities[10])
		}).catch((err) => console.log(err)),
		fetch(url+cities[11].name).then(async response => {
			await scrappingPage(response, cities[11])
		}).catch((err) => console.log(err)),
		fetch(url+cities[12].name).then(async response => {
			await scrappingPage(response, cities[12])
		}).catch((err) => console.log(err)),
		fetch(url+cities[13].name).then(async response => {
			await scrappingPage(response, cities[13])
		}).catch((err) => console.log(err)),
		fetch(url+cities[14].name).then(async response => {
			await scrappingPage(response, cities[14])
		}).catch((err) => console.log(err)),
		fetch(url+cities[15].name).then(async response => {
			await scrappingPage(response, cities[15])
		}).catch((err) => console.log(err)),
		fetch(url+cities[16].name).then(async response => {
			await scrappingPage(response, cities[16])
		}).catch((err) => console.log(err)),
		fetch(url+cities[17].name).then(async response => {
			await scrappingPage(response, cities[17])
		}).catch((err) => console.log(err)),
		fetch(url+cities[18].name).then(async response => {
			await scrappingPage(response, cities[18])
		}).catch((err) => console.log(err)),
		fetch(url+cities[19].name).then(async response => {
			await scrappingPage(response, cities[19])
		}).catch((err) => console.log(err)),
		fetch(url+cities[20].name).then(async response => {
			await scrappingPage(response, cities[20])
		}).catch((err) => console.log(err)),
		fetch(url+cities[21].name).then(async response => {
			await scrappingPage(response, cities[21])
		}).catch((err) => console.log(err)),
		fetch(url+cities[22].name).then(async response => {
			await scrappingPage(response, cities[22])
		}).catch((err) => console.log(err)),
		fetch(url+cities[23].name).then(async response => {
			await scrappingPage(response, cities[23])
		}).catch((err) => console.log(err)),
		fetch(url+cities[24].name).then(async response => {
			await scrappingPage(response, cities[24])
		}).catch((err) => console.log(err)),
		fetch(url+cities[25].name).then(async response => {
			await scrappingPage(response, cities[25])
		}).catch((err) => console.log(err)),
	]
).then(() => {
// result -= ','
// result += ']'
result = result.split("}}{").join('}},{')
result += ']'
console.dir(JSON.parse(result))
res.send(JSON.parse(result))
})
		
	
}

const getAdhanByCityId = (req, res) => {
  const id = req.params.id
	

	const scrapping = async (city) => {
		await axios(`${url+city}`).
					then(response => {
						const html = response.data
						const $ = cheerio.load(html)
	
						$('.content-ville', html).each(function () {
							let prays = $(this).find('.col-md-8').children().text()
							prays = prays.split("\n\n\n\n").join('",\n')
							prays = prays.split("\n\n\n").join(' "')
							prays = prays.split("\n\n").join('"')
							prays = prays.split('\\').join("")
							prays = prays.split('\"q').join('"')
							prays = prays.split('A').join('"a')
							prays = prays.split('""').join('"')
							prays = prays.split(': "').join('": "')
							prays = prays.split('-').join('')
							prays = `{"id":${id},"city":"${city}","prays_times": {${prays}}}`
							let serverRec = JSON.parse(prays)

							res.json(JSON.parse(prays))
							console.log({serverRec})
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
}


export {
	getAllAdhans, getAdhanByCityId
}