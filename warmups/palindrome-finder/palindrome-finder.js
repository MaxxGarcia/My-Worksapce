// MY SOLUTION
// let palindromeFinder = function(str){
//     let strLower = str.toLowerCase()
//     let arrayOfHolding = [];
//     for (let i = 0; i < str.length; i++) {
//         if (strLower.charCodeAt(i) >=  97) arrayOfHolding.push(strLower[i])
//     }
//     let forward = arrayOfHolding.join('');
//     let reverse = arrayOfHolding.reverse().join('');
//     return (reverse === forward)
// }

//BETTER SOLUTION
// function palindromeFinder(str) {
//     var removedSpecial = str.toLowerCase().replace(/[^a-z]/g, "");
//     var reverseStr = removedSpecial.split("").reverse().join("");
//     return removedSpecial === reverseStr;
// }

//BEST SOLUTION
function palindromeFinder(str) {
    var rmvChar = str.toLowerCase().replace(/[^a-z]/g, "");
    for (let i = 0; i < rmvChar.length / 2; i++) {
        if(rmvChar[i] !== rmvChar[rmvChar.length -1 -i]) return false;   
    }
    return true;
}

let str = "dog bones"

console.log(palindromeFinder(str));

module.exports = palindromeFinder;

