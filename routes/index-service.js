var express = require('express');
const passport = require('passport');
const Account = require('../models/account');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Auth Project !!!' });
  res.render('index', { user : req.user });
});

/* GET register page. */
router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            //return res.render('register', { account : account });
            return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            //res.redirect('/');
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
            
        });
    });
});

/* GET login page. */
router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

/* GET logout page, "/". */
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;
