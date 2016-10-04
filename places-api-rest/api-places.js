'use strict';

const Place = require('./models/place.js')

module.exports.getPlaces = (req, res) => {
    Place.find((err, places) => {
        if (err)
            next(err);

        res.status(200).send({places: places});
    })
};

module.exports.getOnePlace = (req, res) => {
    Place.findById(req.params.placeId, (err, place) => {
        if (err)
            next(err);

        res.status(200).send(place);
    })
};

module.exports.addPlace = (req, res) => {
    new Place(req.body).save((err) => {
        if (err)
            res.status(400).send({message: 'Error saving place: ' + err})
        else
            res.status(201).send({message: 'Place saved successfully'});
    });
};

module.exports.modifyOnePlace = (req, res) => {
    Place.findByIdAndUpdate(req.params.placeId, req.body, (err, place) => {
        if (err)
            next(err);

        res.status(204).send();
    })
};

module.exports.deleteOnePlace = (req, res) => {
    Place.findByIdAndRemove(req.params.placeId, (err, place) => {
        if (err)
            next(err);

        res.status(204).send();
    })
};