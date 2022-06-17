const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./database/mongooseConnect')
const artistRoutes = require('./routes/artistRoutes')

const app = express()

// configuracao
app.use(express.json())
app.use(cors())

//banco de dados
db.connect()

//rotas
app.use(artistRoutes)

module.exports = app