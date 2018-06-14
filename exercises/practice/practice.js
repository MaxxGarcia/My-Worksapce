//filter
//reduce
//map
//sort

//foreach

function filter(cb, arr){
    //cb is desgined to take a single item from the array, and its index as arguments
    // it will also output true or false
    var output = [];
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        var passesTest = cb(element, i);
        if(passesTest) output.push(element); 
    }
    return output;
}

var ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var misc = ["a", 4, true, false, {}, [], undefined];

function testForEven(int){
    return int % 2 === 0; 
}
function testForOdd(int){
    return !(int % 2 === 0)
}

function testForOddIndex(misc, i){
    return !(i % 2 === 0);
}

var evens = filter(testForEven, ints);
var odds = filter(testForOdd, ints);
var oddIndexs = filter(testForOddIndex, misc)

console.log(oddIndexs);

var names = ["Ben", "Maxx", "Taylor", "Chazzzzz", "Nicole"];

var longNames = names.filter(function(name, i){
    return name.length < 4;
})

console.log(longNames);