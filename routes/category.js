var express = require('express');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var foodItem = require('../models/foodItem.js');
//var jsdom = require("jsdom");
//$ = require("jquery")(jsdom.jsdom().createWindow());
var router = express.Router();

//handles filter queries from textbox
router.get('/search', function(req, res, next) {
    var db = req.db;
    var collection = db.collection('nut');
    var val = ""+req.query.filter;

  var sort_order = {};
  sort_order[val] = 1;
  //concatenation forces the req.query.filter to resolve before the where
  //otherwise always returns false
  //limits results to items which contain the query
  foodItem.find( {}, { _id: 0} ,function(e,docs){

      res.render('category', {
          "category" : docs, "property" : val});
  }).sort( sort_order );
});


//handles filter queries from textbox
router.get('/sort/:filter', function(req, res, next) {
    var db = req.db;
    var collection = db.collection('nut');
    var val = req.params.filter;
    var sort_order = {};
    sort_order[val] = 1;

    console.log(sort_order);
    //concatenation forces the req.query.filter to resolve before the where
    //otherwise always returns false
    //limits results to items which contain the query
    foodItem.find( {}, { _id: 0} ,function(e,docs){

        res.render('category', {
            "category" : docs
        });
    }).sort( sort_order );
});





//uses url as filter and category to filter
router.get('/:cat/:filter', function(req, res, next) {
    var db = req.db;
    console.log(req.params.filter);
    console.log(req.params.cat);
    var collection = db.collection('nut');
    //concatenation forces the req.params.filter to resolve before the where
    //filters items that fit into a specific category
    foodItem.find({ $where: "this."+req.params.cat
        +".indexOf('"+req.params.filter+"') > -1"}, { _id: 0}, function(e,docs){
        console.log(e);
        //send results to category.jade
        res.render('category', {
            "category" : docs
        });
    });
});


//uses url as filter
router.get('/:filter', function(req, res, next) {
    var db = req.db;
    console.log("filter category get");
    var collection = db.collection('nut');
    //concatenation forces the req.params.filter to resolve before the where
    foodItem.find({ $where: "this.Short_Desc.indexOf('"+req.params.filter.toUpperCase()+"') > -1"}, { _id: 0}, function(e,docs){
        res.cookie('prevData', docs);
        res.render('category', {
            "category" : docs
        });

    });
});

module.exports = router;
