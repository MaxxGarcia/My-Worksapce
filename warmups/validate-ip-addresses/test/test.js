var assert = require('chai').assert;

var validateAddress = require("../validate-ip-addresses.js")

var testCase = ["172.16.254.1", "172.266.254.1", "aa.16.254.1", "1.2.3.4.5", "172.16.-254.1", "172.16.254..1", "172.16. .1"]

describe("testing validateAdress", function(){
it("Case should return true", function(){
assert.isTrue(validateAddress(testCase[0]));
})
it("Case should return False if any number is above 255", function(){
    assert.isFalse(validateAddress(testCase[1]));
    })
it("Case should return False if letters are present", function(){
    assert.isFalse(validateAddress(testCase[2]));
    })
it("Case should return False if there is more than 4 numbers", function(){
    assert.isFalse(validateAddress(testCase[3]));
    })
it("Case should return False if there is a negative number", function(){
    assert.isFalse(validateAddress(testCase[4]));
    })
it("Case should return False if there is a repeated decimal", function(){
    assert.isFalse(validateAddress(testCase[5]));
})
it("Case should return False if there is a number missing", function(){
    assert.isFalse(validateAddress(testCase[6]));
})

})
