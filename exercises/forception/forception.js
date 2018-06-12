var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var end = ":";
let newPeople = [];

for (let i = 0; i < people.length; i++) {
    newPeople.push(people[i].concat(end));
    for (let j = 0; j < alphabet.length; j++) {
        newPeople.push(alphabet[j].toUpperCase());
    }
    }

console.log(newPeople);