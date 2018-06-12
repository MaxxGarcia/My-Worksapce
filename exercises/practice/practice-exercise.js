let reverseStr = function(str) {
    return str.split("").reverse().join("");
}

let isNum = function(str) {
if (Number(str)){
    return true
} else return false; 
}

let isEven = function(num) {
    if (num % 2 === 0){
    return true
} else return false;
}

let averageArray = function(arr) {
    length = arr.length;
    sum= 0;
    average = sum/length;
    return arr.reduce(function(a,b) {
        sum = a + b
      });
      return average;
}

console.log(averageArray([1, 2, 3]));