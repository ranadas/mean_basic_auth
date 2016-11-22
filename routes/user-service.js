"use strict";
var express = require('express');
var mongoose = require('mongoose');
//var db = mongoose.connection;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    getAllAccouns(res);
    // res.send("Some response");
});

//http://localhost:3000/users/search?name=rdas
router.get('/search', function(req, res, next) {
    var nameToSearch = req.param("name");
    findByName(nameToSearch, res);

});

//retrieve all accouns (model registered in accounts.js) from MonogoDb, and write to the response object
function getAllAccouns(response) {
    mongoose.model('accounts').find({}, function(err, results) {
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

function findById(response, idToSearch) {
    // get a account with ID of 1
    mongoose.model('accounts').findById(idToSearch, function(err, user) {
        if (err) throw err;
        console.log(user);
        response.send(results);
    });
}

function findByName(nameToSearch, response) {
    // todo : check if nameToSearch or empty
    console.log("Searching for " + nameToSearch);
    mongoose.model('accounts').find({ username: nameToSearch }, function(err, user) {
        if (err)
            throw err;

        console.log(user);
        response.send(user);
    });
}

function find(response, searchString) {
    // TODO get any admin that was created in the past month

    // get the date 1 month ago
    var monthAgo = new Date();
    monthAgo.setMonth(monthAgo.getMonth() - 1);

    mongoose.model('accounts').find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
        if (err) throw err;

        // show the admins in the past month
        console.log(users);
    });
}

//https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
module.exports = router;