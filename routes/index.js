var express = require('express');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var foodItem = require('../models/foodItem.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Foodlist page. */
router.get('/foodlist', function(req, res) {
    var db = req.db;
    var collection = db.collection('nut');

    foodItem.find({},function(e,docs){

        res.render('foodlist', {
            "foodlist" : docs
        });
    });
});

module.exports = router;
