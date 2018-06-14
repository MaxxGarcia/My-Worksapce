var numbers = [2, 5, 100];  

var numberDoubler = numbers.map(function(num){
    return num + num; 
})
// [4, 10, 200]

var numberStringer = numbers.map(function(num){
    return num.toString();
})
// ["2", "5", "100"]

var names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

var capitalFormater = names.map(function(name){
    return name.toLowerCase().charAt(0).toUpperCase() + name.substr(1);
    
})

var people =[  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var namesOnly = people.map(function(person, i){
    return person.name;

})

var makeStrings = people.map(function(person, i){
    if (person.age > 16){
        return person.name + " can go to The Matrix";
    } else {
        return person.name + " will not be attending The Matrix"
    }
})

var domReady = people.map(function(person, i){
    
    return "<h1>" + person.name + "</h1>" + "<h2>" + person.age + "</h2>";

}, {})


console.log(domReady);