'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//port number: environment variable or 3000
const port = process.env.PORT || 3000

//express is gonna use the middleware body-parser with the following configuration
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})