'use strict';

var should = require("should");
var mongoose = require('mongoose');
var Account = require("../models/account.js");
var db;

const dbUrl = 'mongodb://localhost/passport_local_mongoose_express4';
var should = require('chai').should;

describe("Sample BDD test with Mongo DB", function () {

    before(function (done) {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function (done) {
        mongoose.connection.close();
        done();
    });

    beforeEach(function (done) {
        var account = new Account({
            username: '12345',
            password: 'testy'
        });

        account.save(function (error) {
            if (error)
                console.log('error' + error.message);
            else
                console.log('no error');
            done();
        });
    });

    afterEach(function (done) {
        Account.remove({}, function () {
            done();
        });
    });


    // write all the test are here.
    describe("is db connection valid", function () {
        it("asserts db for validity ", function () {
            console.log("hello");
            should.not.equal(db, null);
        });

        it('find a user by username', function (done) {
            Account.findOne({ username: '12345' }, function (err, account) {
                account.username.should.eql('12345');
                console.log("   username: ", account.username);
                done();
            });
        });
    });
});