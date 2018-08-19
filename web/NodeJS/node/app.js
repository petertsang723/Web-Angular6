const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/forms');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json


const productRoutes = require('./api/routes/products');
const formsRoutes = require('./api/routes/forms');

app.use((req, res, next) => {
    console.log(res.header);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    /*res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH,OPTIONS");
    next();*/
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/products',productRoutes);
app.use('/forms',formsRoutes);


app.use((req, res, next) => {
    
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = app;