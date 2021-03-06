//dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var foodItems = require('./models/foodItem.js');
var foodList = require('./routes/foodList');
var category = require('./routes/category');
//mongo combo
var mongo = require('mongodb');
var mongoose = require('mongoose');
var mongoURI = 'mongodb://adminUser:banana_purple_seven_trumpet@ds053638.mongolab.com:53638/nutrition';

//routing info
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("this is my swamp"));
app.use(express.static(path.join(__dirname, 'public')));





//establisj connection to mongolab
mongoose.connect(mongoURI);
var db = mongoose.connection;
//pass db for future use
app.use(function(req,res,next){
    req.db = db;
    next();
});



//start routing
app.use('/', routes);
app.use('/foodList', foodList);
app.use('/category', category);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
