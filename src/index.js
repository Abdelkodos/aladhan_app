import { getAllAdhans, getAdhanByCityId } from './controllers/prays.js'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { readFileSync } from 'fs'
import path from 'path'

const data = JSON.parse(readFileSync(new URL('./second_data.json', import.meta.url)))
const users = JSON.parse(readFileSync(new URL('./users.json', import.meta.url)))
const app = express()

const getUser = id => users.map((user) => user.userId == id ? user : null )
const getData = id => data.map((data) => data.userId == id ? data : null )

app.use(cors({
	origin: '*',
  optionsSuccessStatus: 200
}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)
// app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))

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

app.listen(3000, () => console.log("Yeah I'm Running"))
