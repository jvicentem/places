'use strict'

const mongoose = require('mongoose');

const Tag = mongoose.model('Tag');
const Schema = mongoose.Schema;

var place  = new Schema({
    name: String,
    coordinates: {
                    latitude: Number,
                    longitude: Number
                 },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    lactose: Boolean,
    review: {type: String, enum: ['good', 'normal', 'bad', 'unknown']},
    url: String
});

module.exports = mongoose.model('Place', place);
