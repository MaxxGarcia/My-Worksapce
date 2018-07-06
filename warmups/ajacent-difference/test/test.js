const assert = require ('chai').assert;

const difference = require ("../ajacent-difference.js")

const testCase = [
    ["this", "is", "an", "array"],
    ["one", "two", "three", "four"],
    ["four", "three", "two", "one"],
    ["this", "is", "a", "much", "longer", "array"],
    ["this", "is", "much", "longer", "array", "a"]
]

const expected = [
    ["is", "an", "array"],
    ["two", "three", "four"],
    ["four", "three", "two"],
    ["much", "longer", "array"],
    ["much", "longer", "array"]

]

describe ("testing difference function", () => {
    it ("case 0 should equal expected 0", () => {
        assert.deepEqual(difference(testCase[0]), expected[0]);
    })
    it ("case 1 should equal expected 1", () => {
        assert.deepEqual(difference(testCase[1]), expected[1])
    })
    it("case 2 should equal expected 2", () => {
        assert.deepEqual(difference(testCase[2]), expected[2])
    })
    it("case 3 should equal expected 3", () => {
        assert.deepEqual(difference(testCase[3]), expected[3])
    })
    it("case 4 should equal expected 4", () => {
        assert.deepEqual(difference(testCase[4]), expected[4])
    })
})