// var longNames = names.filter(function(name, i){
//     return name.length < 4;
// })

let numberArray = [3, 6, 8, 2];

let stringArray = ["dog", "wolf", "by", "family", "eaten", "camping"];

let people = [  
    {
        name: "Angelina Jolie",
        member: true,
        age: 80
    },
    {
        name: "Eric Jones",
        member: false,
        age: 2
    },
    {
        name: "Paris Hilton",
        member: true,
        age: 05
    },
    {
        name: "Kayne West",
        member: false,
        age: 16
    },
    {
        name: "Bob Ziroll",
        member: true,
        age: 100
    }
];

var greaterThanFive = numberArray.filter(function(number){
    return number >= 5;
})

var evensOnly = numberArray.filter(function(number){
    return number % 2 === 0;
})

var fiveOrFewer = stringArray.filter(function(str){
    return str.length <= 5;
})

var belongToIlluminati = people.filter(function(person){
   return person.member;
})

var goToMatrix = people.filter(function(person){
        return person.age > 15;
 })
 



console.log(belongToIlluminati);