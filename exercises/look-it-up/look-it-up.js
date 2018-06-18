var rs = require('readline-sync');

let dictionary = [];
let choices = ["Add a word", "Look up a word"];
var Define = function (definition, name){
    word ={
    name: name,
    definition: definition
    }
}; 

// while (searching) {
//     let query = rs.keyInSelect(choices, "\nWhat would you like to do? \n")
//     if (query === 0){
//         let name = rs.question("\nEnter the word you would like to add to our dictonary... \n");
//         let definition = rs.question("\nNow enter the definition you think would be best.. \n");
//         for (let i = 0; i < dictionary.length; i++) {
//             if (dictionary[i] === name){
//                 console.log("That word is already in the dictionary as " + dictionary.word.defintion + " .")
//                 continue;
//             }else {
//             name = new Define(definition)
//             dictionary.push(name);
//         }
//     } 
// }
// }

placeholder = new Define("death to infidels", "aluakbar");
dictionary.push(placeholder)
console.log(dictionary)