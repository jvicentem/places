'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Tag = mongoose.model('Tag');

var place  = new Schema({
    name: String,
    coordinates: {
                    latitude: Number,
                    longitude: Number
                 },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    lactose: Boolean,
    review: {type: String, enum: ['good', 'normal', 'bad']},
    url: String
});

module.exports = mongoose.model('Place', place);