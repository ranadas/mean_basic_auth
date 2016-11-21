"use strict";
var express = require('express');
var mongoose = require('mongoose');
//var db = mongoose.connection;
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    getAllAccouns(res);
    // res.send("Some response");
});

//retrieve all accouns (model registered in accounts.js) from MonogoDb, and write to the response object
function getAllAccouns(response) {
    mongoose.model('accounts').find({}, function (err, results) {
        if (err) {
            return console.error(err);
        } else {
            console.log("RETURNING : -> " + results);
            response.send(results);
            //return results;
        }
    });
    // var cursor = db.collection('accounts').find()
    // db.collection('accounts').find().toArray(function(err, results) {
    //   console.log("\n-->"+results)
    // });
}

module.exports = router;