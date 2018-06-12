let largest = function (arr){
    arr.sort(function(a, b){return a-b});
    return arr[arr.length -1];
}

let lettersWithStrings = function(arr, varr){
    let present = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == varr){
                present.push(arr[i]);
            } else continue; 
        }
    }
    return present;
}

let isDivisible = function (num1, num2){
    if (num1 % num2 === 0){
    return true;
    } return false; 
} 

console.log(isDivisible(4, 4));