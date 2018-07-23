const assert = require('chai').assert;

const filterDatabase = require('../query-it.js');

const database = [  
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const testCase = [
    {dolphin: "squeak!"},
    {firstName: "Jack", age: 2},
    {}
]

expected = [
    [],
    [
        {firstName: "Jack", lastName: "Smith", age: 2},
        {firstName: "Jack", lastName: "White", age: 2}
    ],
    [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
    ]
]

describe("Testing filterDatabase function", ()=> {
    it("testcase 0 will return an empty array", () => {
        assert.deepEqual(filterDatabase(testCase[0], database), expected[0])
    })
    it("testcase 1 will return two objects in an array", () => {
        assert.deepEqual(filterDatabase(testCase[1], database), expected[1])
    })
    it("testcase 2 will return an empty array", () => {
        assert.deepEqual(filterDatabase(testCase[2], database), expected[2])
    })
})