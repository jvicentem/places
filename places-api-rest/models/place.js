'use strict'

const mongoose = require('mongoose');

const Tag = mongoose.model('Tag');
const Schema = mongoose.Schema;

var place  = new Schema({
    name: String,
    lactose: Boolean,
    url: String,
    review: {type: String, enum: ['good', 'normal', 'bad']},
    tags: [{type: Schema.ObjectId, ref: 'Tag'}],
    coordinates: {
                    latitude: Number,
                    longitude: Number
                 }
});

module.exports = mongoose.model('Place', place);