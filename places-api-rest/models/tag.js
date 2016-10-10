'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var tag = new Schema(
    {
        name: String
    }
);

module.exports = mongoose.model('Tag', tag);