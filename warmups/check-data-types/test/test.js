var assert = require('chai').assert;

var checkTypes = require("../check-data-types.js")

var testCase = [
    [[1,2,3],["a","b","c"],[true, true, true]],
     [[true,false,true],[false,false,true]]
    ]

var expected = [false, true]

describe("testing checkTypes", function(){
it("Case 0 should return false", function(){
assert.isFalse(checkTypes(testCase[0]), expected[0]);
})
it("case 1 should return true", function(){
assert.isTrue(checkTypes(testCase[1]), expected[1]);
})
})
