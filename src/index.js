const { getAdhanByCityId, getAllAdhans } = require('./controllers/prays')
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors({
	origin: '*',
  optionsSuccessStatus: 200
}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.get("/prays", getAllAdhans)
app.get('/prays/:id', getAdhanByCityId)

app.listen(3000, () => console.log("Yeah I'm Running"))
