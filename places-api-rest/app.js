'use strict';

//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Tag = require('./models/tag.js');
const Place = require('./models/place.js');

mongoose.connect('mongodb://localhost:27017/places-app');

const app = express();

//port number: environment variable or 3000
const port = process.env.PORT || 3000;

//express is gonna use the middleware body-parser with the following configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//endpoints
//Get all places
app.get('/places', (req, res) => {
    Place.find((err, places) => {
        if (err)
            next(err);

        res.status(200).send({places: places});
    })
});

//Get one place
app.get('/places/:placeId', (req, res) => {
    Place.findById(req.params.placeId, (err, place) => {
        if (err)
            next(err);

        res.status(200).send(place);
    })
});

//Add a place
app.post('/places', (req, res) => {
    new Place(req.body).save();
    res.status(201).send({message: 'Place saved successfully'});
});

//Modify one place
app.put('/places/:placeId', (req, res) => {
    Place.findByIdAndUpdate(req.params.placeId, req.body, (err, place) => {
        if (err)
            next(err);

        res.status(204).send();
    })
});

//Delete one place
app.delete('/places/:placeID', (req, res) => {
    Place.findByIdAndRemove(req.params.placeId, (err, place) => {
        if (err)
            next(err);

        res.status(204).send();
    })
});

//Get all tags
app.get('/tags', (req, res) => {
    Tag.find((err, tags) => {
        if (err)
            next(err);

        res.status(200).send({tags: tags});
    })
});

//Get one tag
app.get('/tags/:tagId', (req, res) => {
    Tag.findById(req.params.tagId, (err, tag) => {
        if (err)
            next(err);

        res.status(200).send(tag);
    })
});

//Add a tag
app.post('/tags', (req, res) => {
    new Tag(req.body).save();
    res.status(201).send({message: 'Tag saved successfully'});
});

//Modify one tag
app.put('/tags/:tagId', (req, res) => {
    Tag.findByIdAndUpdate(req.params.tagId, req.body, (err, tag) => {
        if (err)
            next(err);

        res.status(204).send();
    })
});

//Delete one tag
app.delete('/tags/:tagId', (req, res) => {
    Tag.findByIdAndRemove(req.params.tagId, (err, tag) => {
        if (err)
            next(err);

        res.status(204).send();
    })
});

//Server listening block
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});