'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//port number: environment variable or 3000
const port = process.env.PORT || 3000

//express is gonna use the middleware body-parser with the following configuration
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//endpoints

//Get all places
app.get('/places', (req, res) => {
    res.status(200).send({places: []})
})

//Get one place
app.get('/places/:placeId', (req, res) => {
    
})

//Add a place
app.post('/places', (req, res) => {
    console.log(req.body)
    res.status(201).send({})
})

//Modify one place
app.put('/places/:placeId', (req, res) => {

})

//Delete one place
app.delete('/places/:placeID', (req, res) => {

})

//Get all tags
app.get('/tags', (req, res) => {

})

//Get one tag
app.get('/tags/:tagName', (req, res) => {

})

//Add a tag
app.post('/tag', (req, res) => {

})

//Modify one tag
app.put('/tags/:tagName', (req, res) => {

})

//Delete one tag
app.delete('/tags/:tagName', (req, res) => {

})



//Server listening block
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})