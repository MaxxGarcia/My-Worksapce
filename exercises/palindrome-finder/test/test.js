var assert = require('chai').assert;

var paliFinder = require("../palindrome-finder.js")

var testCase = ["", "Star Rats!", "palindrome", "I madam, I made radio! So I dared! Am I mad?? Am I?!"]

describe("testing palindrome-finder", function(){
    it("Case 0 should return true", function(){
        assert.isTrue(paliFinder(testCase[0]));
    })
    it("case 1 should return true", function(){
        assert.isTrue(paliFinder(testCase[1]));
    })
    it("case 2 shoulrd return false", function(){
        assert.isFalse(paliFinder(testCase[2]));
    })
    it("case 3 shoulrd return true", function(){
        assert.isTrue(paliFinder(testCase[3]));
    })
})