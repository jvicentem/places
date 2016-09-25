'use strict';

const Tag = require('./models/tag.js');

module.exports.getTags = (req, res) => {
    Tag.find((err, tags) => {
        if (err)
            next(err);

        res.status(200).send({tags: tags});
    })
};

module.exports.getOneTag = (req, res) => {
    Tag.findById(req.params.tagId, (err, tag) => {
        if (err)
            next(err);

        res.status(200).send(tag);
    })
};

module.exports.addTag = (req, res) => {
    new Tag(req.body).save((err) => {
        console.log(req.body)
        if (err)
            res.status(400).send({message: 'Error saving tag: ' + err})
        else
            res.status(201).send({message: 'Tag saved successfully'});
    });
};

module.exports.modifyOneTag = (req, res) => {
    Tag.findByIdAndUpdate(req.params.tagId, req.body, (err, tag) => {
        if (err)
            next(err);

        res.status(204).send();
    })
};

module.exports.deleteOneTag = (req, res) => {
    Tag.findByIdAndRemove(req.params.tagId, (err, tag) => {
        if (err)
            next(err);

        res.status(204).send();
    })
};