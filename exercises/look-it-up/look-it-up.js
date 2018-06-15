let dictionary = {};
let choices = ["Add a word", "Look up a word"];
var define = function (word, definition){
    this.word = word,
    this.definition = definition
}; 

while (searching) {
    let query = rs.keyInSelect(choices, "\nWhat would you like to do? \n")
    if (query === 0){
        let word = rs.question("\nEnter the word you would like to add to our dictonary... \n");
        let definition = rs.question("\nNow enter the definition you think would be best.. \n");
        for (let i = 0; i < dictionary.length; i++) {
            if (/* word is already in dictionary*/){
                console.log("That word is already in the dictionary as " + definition + " .")
                continue;
            }else {
            define(word, definition)
        }
    } 
}
}