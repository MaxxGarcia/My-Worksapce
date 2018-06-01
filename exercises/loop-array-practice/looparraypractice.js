console.log("challenge #1")
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
computersTotal = 0

for (let i = 0; i < officeItems.length; i++) {
    if (officeItems[i] = "computer"){
        computersTotal++;
    }
}
console.log(computersTotal)

console.log("challenge #2")
var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

for (let index = 0, gender = "her"; index < peopleWhoWantToSeeMadMaxFuryRoad.length; index++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[index].gender = "male"){
        gender = "him";
    }
    
    if (peopleWhoWantToSeeMadMaxFuryRoad[index].age > 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[index].name + " is old enough to see Mad Max Fury Road, let " + gender + " in.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[index].name + " is NOT old enough to see Mad Max Fury Road, let " + gender + " in.");
    }
    
}

let simpleArrays = [
    [2, 5, 435, 4, 3],
    [1, 1, 1, 1, 3],
    [9, 3, 4, 2]
]

let button = 0;

for (let i = 0; i < simpleArrays.length; i++) {
       for (let j = 0; j < simpleArrays[i].length; j++) {
            button += simpleArrays[i][j]; 
       } 
       console.log(button);
}
