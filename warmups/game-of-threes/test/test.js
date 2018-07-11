const assert = require('chai').assert;

const ofThree = require("../game-of-threes.js");

const testCase = [1, 3, 12];
const expected = [0, 1, 2]

describe("testing ofThree", function() {
    it("test 0 for ofThree should equal epxcted 0", function() {
        assert.equal(ofThree(testCase[0]), expected[0]);
    })
    it("test 1 for ofThree should equal epxcted 1", function() {
        assert.equal(ofThree(testCase[1]), expected[1]);
    })
    it("test 2 for ofThree should equal epxcted 2", function() {
        assert.equal(ofThree(testCase[2]), expected[2]);
    })
})
