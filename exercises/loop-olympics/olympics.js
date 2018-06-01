for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

for (let index = 9; index > -1; index--) {
    console.log(index);
    
}

var fruit = ["banana", "orange", "apple", "kiwi"]

for (let index = 0; index < fruit.length; index++) {
    console.log(fruit[index]);
    
}

let countArray = [];
for (let index = 0; index < 10; index++) {
    countArray.push(index);
    
}
console.log(countArray);

for (let index = 0; index < 101; index++) {
    if (index % 2 === 0){
    console.log(index);
    } 
}

var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var someFruit = [];

for (let index = 0; index < fruits.length; index += 2) {
    someFruit.push(fruits[index])
}
console.log(someFruit);

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for (let index = 0; index < peopleArray.length; index++) {
      console.log(peopleArray[index].name)
      
  }