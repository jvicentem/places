'use strict';

//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
var https = require('https');
var http = require('http');
var fs = require('fs');

const apiTags = require('./api-tags.js');
const apiPlaces = require('./api-places.js');


mongoose.connect('mongodb://localhost:27017/places-app');

const app = express();

//port number: environment variable or 3000
const port = process.env.PORT || 3000;

//express is gonna use the middleware body-parser with the following configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

http.createServer(app).listen(port);

var options = {
    key: fs.readFileSync('/etc/apache2/ssl/ssl.key'),
    cert: fs.readFileSync('/etc/apache2/ssl/ssl.crt'),
    requestCert: false,
    rejectUnauthorized: false
};

const portHttps = parseInt(port) + 1;

https.createServer(options, app).listen(portHttps,
    () => {
        console.log('Listening on port ' + portHttps);
    }
);

//endpoints
//Places
//Get all places
app.get('/places', cors(), apiPlaces.getPlaces);
//Get one place
app.get('/places/:placeId', cors(), apiPlaces.getOnePlace);
//Add a place
app.post('/places', apiPlaces.addPlace);
//Modify one place
app.put('/places/:placeId', apiPlaces.modifyOnePlace);
//Delete one place
app.delete('/places/:placeID', apiPlaces.deleteOnePlace);
//Tags
//Get all tags
app.get('/tags', cors(), apiTags.getTags);
//Get one tag
app.get('/tags/:tagId', cors(), apiTags.getOneTag);
//Add a tag
app.post('/tags', apiTags.addTag);
//Modify one tag
app.put('/tags/:tagId', apiTags.modifyOneTag);
//Delete one tag
app.delete('/tags/:tagId', apiTags.deleteOneTag);