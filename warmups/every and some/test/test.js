const assert = require('chai').assert;

const functionObject = require("../every-and-some.js");

const testCase = [[[1,2,3], functionObject.typeOfCallback],[["1","2",3], functionObject.typeOfCallback]];

describe("testing everyFunction and someFunction"), ()=> {
    it("test 1 for everyFunction should return true"), () => {
        assert.isTrue(functionObject.everyFunction(testCase[0]));
    }
    it("test 1 for everyFunction should return true"), () => {
        assert.isTrue(functionObject.everyFunction(testCase[1]));
    }
}