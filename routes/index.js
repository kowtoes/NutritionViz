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
    console.log("main foodlist get");
    foodItem.find( {}, { _id: 0},function(e,docs){

        res.render('foodlist', {
            "foodlist" : docs
        });
    });
});

/* GET category page. */
router.get('/category', function(req, res) {
    var db = req.db;
    var collection = db.collection('nut');
    var val = ["Water","Energ_Kcal", "Protein", "Tot_Lipid", "Carbohydrt", "Fiber_TD", "Ash",
    "Calcium", "Phosphorus", "Iron", "Sodium", "Potassium", "Magnesium", "Zinc", "Copper", "Vit_A", "Vit_E",
    "Thiamin", "Riboflavin", "Niacin", "Vit_C", "FA_Sat","FA_Mono","FA_Poly", "Cholestrl", "GmWt_1", "Refuse_Pct"];
    console.log("main category get");
    foodItem.find( {}, { _id: 0},function(e,docs){

        res.render('category', {
            "category" : docs, "property" : val
        });
    });
});




module.exports = router;
