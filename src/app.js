const express = require('express')
const morgan = require('morgan')
const base = require('./routes/base')

const app = express()
app.use(morgan('tiny'))
app.use("/", base)

module.exports = app