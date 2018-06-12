var rs = require("readline-sync");

var name = rs.question('May I have your name? ');
var age = rs.question('\nSo how old are you ' + name + "? ");
var favColor = rs.question("\n" + name + ' could you tell me your favorite color? ')
if (favColor.length > 20){
    console.log("\nYou think this is a game? " + favColor.slice(favColor.length/2) + " that is how you sound. There isn't a color that long. This is a joke. \n" + favColor + "\n" + favColor + "\n" + favColor + "\n")
    var favNumber = rs.question("\nI'm sorry...I got out of line. Please give your favorite number...")
    console.log(favColor.slice(favNumber));
    return;
} 
console.log("\nSo your name is " + name.toUpperCase() + ", you are " + age + " years old, and your favorite color is " + favColor + ". Which is " + favColor.length + " characters long. We should give you a new name that combines your favorite color and current name. Yes you shall be " + name.concat(favColor) + " from now on.") 
var isOk = rs.keyInYN("\nIs that okay?")

if (isOk){
    console.log('\nOkay..thank you for being cooperative.')
} else {
    console.log("\nwhat do you mean no! Lets try this again.")

}

