const mongoose = require('mongoose');

var schema = new mongoose.Schema({ 
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    date1: Date,
    date2: Date,
    author: String,
    content: String,
    posttime: { type : Date, default: Date.now },
    iconurl: String,
    attachments: Array },{versionKey: false});

module.exports = mongoose.model('Forms', schema);