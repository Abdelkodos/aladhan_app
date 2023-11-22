import { getAllAdhans, getAdhanByCityId } from './controllers/prays.js'
import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()

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

app.listen(3000, () => console.log("Yeah I'm Running"))
