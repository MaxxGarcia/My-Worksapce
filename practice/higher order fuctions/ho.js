// function hof(functionName){
//     functionName();
// }

// function callback(){
//     console.log("HOLLA BACK");
// }

// hof(callback);

// function hof (){
//     var func = function(){
//         var inceptionFunc = function() {
//             console.log("WTF");
//         }
//         return inceptionfunc;
//     }
//     return func;
// }

// hof()()();

var rs = require("readline-sync");

var x = rs.question("\nPick a positive integer: ");
var y = rs.question("\nPick another one: ");
var operators = ["+", "-", "/", "*"];

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function calculate(operation, x, y){
    return operation(x,y);
}


var operatorIndex = rs.keyInSelect(operators, "\nWhat operation would you like to perform? ");

function display(OperatorIndex){
    switch(operators[operatorIndex]){
        case "+": return calculate(add, x, y);
        case "-": return calculate(subtract, x,y)
    }
}

