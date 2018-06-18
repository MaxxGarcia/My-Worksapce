var assert = require('chai').assert;

//imported function
var antiCaps = require("../anti-caps.js")

var testCase = ["", "abc", "ABC", "AbC"];

describe("testing anti-caps", function(){
    it("should return empty string", function(){
        assert.equal(antiCaps(testCase[0]) , "");
    })
    it("should return ABC", function(){
        assert.equal(antiCaps(testCase[1]), "ABC");
    })
    it("shoulrd return abc", function(){
        assert.equal(antiCaps(testCase[2]), "abc");
    })
    it("shoulrd return aBc", function(){
        assert.equal(antiCaps(testCase[3]), "aBc");
    })
})


