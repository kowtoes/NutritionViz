var express = require('express');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var foodItem = require('../models/foodItem.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/search', function(req, res, next) {
  res.render('search', { title: 'Nutrition Search' });
});



router.get('/foodlist/:filter', function(req, res) {
    var db = req.db;
    var collection = db.collection('nut');
    //concatenation forces the req.params.filter to resolve before the where
    foodItem.find({ $where: "this.Short_Desc.indexOf('"+req.params.filter.toUpperCase()+"') > -1"}, function(e,docs){
        console.log(e);
        res.render('foodlist', {
            "foodlist" : docs
        });
    });
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
