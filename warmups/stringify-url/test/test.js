const assert = require("chai").assert;

const {stringifyUrl, objectizzexivy} = require("../strigify-url.js");

const testCasesStringify = [
    {
        url: "http://localhost:8080/monkeys",
        query: {  
            color: "black",
            species: "howler"
          }
    },
    {
        url: "http://localhost:8080/monkeys",
        query: {  }
    }
    
]

const testCasesObjectizzexivy =["http://localhost:8080/monkeys?color=black&species=howler", "http://localhost:8080/monkeys"]


describe("Testing stringifyUrl", () => {
    it("Case 0 should return a url with parameters seperated by &'s", () => {
        assert.equal(stringifyUrl(testCasesStringify[0].url, testCasesStringify[0].query), "http://localhost:8080/monkeys?color=black&species=howler")
    });
    it("Case 1 should return a url with no queery added", () => {
        assert.equal(stringifyUrl(testCasesStringify[1].url, testCasesStringify[1].query), "http://localhost:8080/monkeys")
    });
});
describe("Testing Objectizzexivy", () => {
    it("Case 0 should return a query object with key value pairs", () => {
        assert.deepEqual(objectizzexivy(testCasesObjectizzexivy[0]), { color: "black",species: "howler" })
    });
    it("Case 1 should return an empty queery object", () => {
        assert.deepEqual(objectizzexivy(testCasesStringify[1].url), { })
    });
});