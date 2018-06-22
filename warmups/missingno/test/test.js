var assert = require('chai').assert;

var findMissingNo = require("../missingno.js");

var testCase = [
    [2,1,3,5],
    [12,10, 9],
    [-3,0,-2,3,2,-1]];
var expected = [4,11,1];

describe("testing findMissingNo function", function(){
    it("case should return a single number that is missing from the array", function(){
        assert.equal(findMissingNo(testCase[0]), expected[0]);
    })
    it("case should return a single number that is missing from the array", function(){
        assert.equal(findMissingNo(testCase[1]), expected[1]);
    })
    it("case should return a single number that is missing from the array", function(){
        assert.equal(findMissingNo(testCase[2]), expected[2]);
    })
})