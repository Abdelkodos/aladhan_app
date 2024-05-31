import { getAllAdhans, getAdhanByCityId } from './controllers/prays.js'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { fileURLToPath } from 'url'
import { read, readFileSync } from 'fs'
import path from 'path'


const data = JSON.parse(readFileSync(new URL('./second_data.json', import.meta.url)))
const users = JSON.parse(readFileSync(new URL('./users.json', import.meta.url)))
const test = JSON.parse(readFileSync(new URL('../test.json', import.meta.url)))
const app = express()

const getUser = id => {
	const user = users.map((user) => user.userId == id ? user : undefined )
	return user[0]
}

const getData = id => {
	const res = data.map((data) => data.userId == id ? data : undefined )
	return res[0]
}
	

app.use(cors({
	origin: '*',
  optionsSuccessStatus: 200
}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
// app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/prays", getAllAdhans)
app.get('/prays/:id', getAdhanByCityId)
app.get('/data/:id', (req, res) => {
	const id = req.params.id
	res.json(getData(id))
})
app.get('/user/:id', (req, res) => {
	const id = req.params.id
	res.json(getUser(id))
})
app.post('/prescolaire/adherent-rib/update/:idRib', (req, res) => {
	const idRib = req.params.idRib
	const newRib = req.body.newRib
	if ( idRib == 66812 ) {
		test.rib = newRib
		res.json(test)
	}
})

app.listen(3000, () => console.log("Yeah I'm Running"))
