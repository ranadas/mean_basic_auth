var expect = require("chai").expect;
'use strict';

const a_constant = '1.410';
describe("Sample BDD test code", function () {
    console.log('in a dummy test code');
    describe("RGB to Hex conversion", function () {
        it("converts the basic colors", function () {
            expect(1).to.equal(1); // to break expect(1).to.equal(2);
        });
    });

    describe("Hex to RGB conversion", function () {
        it("converts the basic colors", function () {
            expect(1).to.equal(1);
            expect(a_constant).to.not.be.null;
        });
    });
});
//https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha