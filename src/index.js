const { getCityAdhans } = require('./controllers/prays')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
	origin: '*',
  optionsSuccessStatus: 200
}))

app.get('/prays/:id', getCityAdhans)

app.listen(3000, () => console.log("Yeah I'm Running"))
