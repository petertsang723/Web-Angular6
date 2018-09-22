const express = require('express');
const router = express.Router();
const Form = require('../mongo_models/form');
const mongoose = require('mongoose');
const moment = require('moment');
const fs = require('fs');
const rs = require('randomstring');

router.get('/', (req, res, next) => {
    Form.find()
    .exec()
    .then(doc => {
        //console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/' ,(req, res, next) => {
    var files = [];

    for (var i = 0; i <Object.keys(req.body.attachments).length; i++)
    {
        //console.log(req.body.attachments[i].filename);
        //console.log(req.body.attachments[i].size);
        //console.log(base64str.replace(base64str.slice(0,base64str.indexOf(",")+1),""));
        var base64str = req.body.attachments[i].content;
        var base64 = base64str.replace(base64str.slice(0,base64str.indexOf(",")+1),"");
        var fname = req.body.attachments[i].filename;
        var fpath = "uploads/" + rs.generate(12) + "/";
        
        var file = {
            filename: fname,
            filepath: fpath + fname
        }

        files.push(file);

        fs.mkdirSync(fpath, (err) => {
            console.log(err);
        });
        fs.writeFile(fpath + req.body.attachments[i].filename, base64, 'base64', function(err) {
            console.log(err); // writes out file without error, but it's not a valid image
        });
    }
    const form = new Form({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        date1: req.body.date1,
        date2: req.body.date2,
        author: req.body.author,
        content: req.body.content,
        posttime: req.body.posttime,
        iconurl: req.body.iconurl,
        attachments: files
    });
    form.save().then(result =>{
        //console.log(result);
        /*res.status(200).json({
            message: 'Handling POST requests to form'
        });*/
        res.status(200).json(req.body);
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