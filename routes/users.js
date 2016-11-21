var express = require('express');

var mongoose = require('mongoose');
var db = mongoose.connection;

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  var cursor = db.collection('accounts').find()
  console.log(cursor);
  res.send('getting all  User Accounts..');
});

module.exports = router;