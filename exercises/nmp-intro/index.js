var rs = require("readline-sync");

var userName = rs.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var likesRavioli = rs.keyInYN("Do you like ravioli?");

if (likesRavioli){
    console.log("cool story, bro")
} else {
    console.log("you jerk!")
}
var directions = ["north", "south", "east", "west"];
var direction = rs.keyInSelect(directions, "which way do you want to go?")
console.log(direction);