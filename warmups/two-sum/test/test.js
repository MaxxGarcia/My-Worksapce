const assert = require('chai').assert

const twoSum = require('../two-sum.js');

const testCases = [
    {arr: [1, 2, 3], int: 4}, 
    {arr: [1, 2, 3], int: 5}, 
    {arr:[1, 1, 1], int:2}, 
    {arr:[], int:1},
    {arr:[1, 2, 3, 4, 5, 6, 7, 8], int: 9}
];
const expected = [[0, 2],[1, 2], "Not Found", [0, 7]]

describe("testing twoSum function", () =>{
    it("Case 0 should return [0, 2]", ()=> {
        assert.deepEqual(twoSum(testCases[0].arr, testCases[0].int ), expected[0])
    })
    it("Case 1 should return [1, 2]", ()=> {
        assert.deepEqual(twoSum(testCases[1].arr, testCases[1].int ), expected[1])
    })
    it("Case 2 should return Not Found", ()=> {
        assert.deepEqual(twoSum(testCases[2].arr, testCases[2].int) , expected[2])
    })
    it("Case 3 should return Not Found", ()=> {
        assert.deepEqual(twoSum(testCases[3].arr, testCases[3].int ), expected[2])
    })
    it("Case 4 should return [3, 4]", ()=> {
        assert.deepEqual(twoSum(testCases[4].arr, testCases[4].int ), expected[3])
    })
})