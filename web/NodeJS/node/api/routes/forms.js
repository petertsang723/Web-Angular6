const express = require('express');
const router = express.Router();
const Form = require('../mongo_models/form');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Form.find()
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res, next) => {
    const form = new Form({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        date1: req.body.date1,
        date2: req.body.date2,
        author: req.body.author,
        content: req.body.content,
        posttime: req.body.posttime,
        iconurl: req.body.iconurl
    });
    form.save().then(result =>{
        console.log(result);
        res.status(200).json({
            message: 'Handling POST requests to form'
        });
    })
    .catch(err => console.log(err));

    
});

router.get('/:formId', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get for '+req.params.formId
    });
});

router.delete('/:formId', (req, res, next) =>{
    const id = req.params.formId;
    Form.remove({
        _id: id
    }).exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        conolse.log(err);
        res.status(500).json(err);
    })
});

router.patch("/:formId", (req, res, next) => {
    const id = req.params.formId;
    const updateOps = {};
    for(const key in req.body){
        updateOps[key] = req.body[key];
        console.log(key);
        console.log(req.body[key]);
    }
    
    Form.update({_id: id}, {$set: updateOps}).exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        conolse.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;