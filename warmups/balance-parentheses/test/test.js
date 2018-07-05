const assert = require('chai').assert;

const balance = require('../balance-parentheses.js');

const testCase = ["()()", "(())", "()))", ")()(", "())(", "ab()c", "ab)(c", "( )()"];

describe("testing balance.", () => {
    it("should return True", () =>{
        assert.isTrue(balance(testCase[0]))
    })
    it("should return True", () =>{
        assert.isTrue(balance(testCase[1]))
    })
    it("should return False", () =>{
        assert.isFalse(balance(testCase[2]))
    })
    it("should return False", () =>{
        assert.isFalse(balance(testCase[3]))
    })
    it("should return False", () =>{
        assert.isFalse(balance(testCase[4]))
    })
    it("should return True", () =>{
        assert.isTrue(balance(testCase[5]))
    })
    it("should return False", () =>{
        assert.isFalse(balance(testCase[6]))
    })
    it("should return True", () =>{
        assert.isTrue(balance(testCase[7]))
    })
})
