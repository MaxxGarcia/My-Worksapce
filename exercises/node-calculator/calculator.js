var rs = require("readline-sync")
var operator = ["+", "-", "*", "/"]

var varA = Number(rs.question('So you want to do some math eh? \n Give me the first number you want to do some maths with, no tricky business. ' ));
if (!typeof varA === "number") {
    console.log(varA + "\nthat's not a number. I told you no tricky business. ")
}
var varB = Number(rs.question('\nThat will do nicely...how bout that second number? '))
if (!typeof varB === "number") {
    console.log(varB + "\nthat's not a number. I told you no tricky business. ")
}
var chosenOperator = rs.keyInSelect(operator, "\n So what kinda math are we doin for this gig?");

var mathTime = function (){
    if (chosenOperator == 0){
        return "Looks like the answer is " + (varA + varB);
    } else if (chosenOperator == 1){
        return "Looks like the answer is " + (varA - varB);
    } else if (chosenOperator == 2){
        return "Looks like the answer is " + (varA * varB);
    } else if (chosenOperator == 3){
        return "Looks like the answer is " + (varA / varB);
    }
}

console.log(mathTime())