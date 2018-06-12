var readline = require('readline-sync');  
var phrase = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var coded = "";

for (let i = 0; i < phrase.length; i++) {
    phrase = phrase.toLowerCase();
    let asciiCode = phrase[i].charCodeAt(0); 
    shift = +shift % 26;
    if (asciiCode < 97){
        continue;
    } else if (asciiCode+shift > 122){
        asciiCode -= 25; 
    }
    coded += (String.fromCharCode(asciiCode + shift));
}
console.log(coded);





