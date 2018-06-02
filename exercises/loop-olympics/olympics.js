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

names = [];
occupation = [];
otherOccupation = [];
otherNames = [];

for (let index = 0; index < peopleArray.length; index++) {
    names.push(peopleArray[index].name)
    occupation.push(peopleArray[index].occupation)
      
  }
console.log(names, occupation);

  for (let i = 0; i < peopleArray.length; i++) {
    if(i % 2 === 0) {
    otherNames.push(peopleArray[i].name)   
  } else {
    otherOccupation.push(peopleArray[i].occupation)
  }
  }
console.log(otherNames, otherOccupation)

array1 =[];

for (let i = 0; i < 3; i++) {
    array1.push([0,0,0])
  }
console.log(array1);

array2 =[];

for (let i = 0; i < 3; i++) {
    array2.push([i,i,i])
  }
console.log(array2);

array3 =[];

for (let i = 0; i < 3; i++) {
    array3.push([0,1,2]);
  }
console.log(array3);

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
        array1[i][j] = "x";
    }
  }
console.log(array1);
  