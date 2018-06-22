let myPeople = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ];

  
///WRONG WRONG WRONG. 
// let nameSorter = sortedOfAge.sort(function(a,b){
//     // return a.lastName.charCodeAt(0) - b.lastName.charCodeAt(0)
//     return a.lastName.localeCompare(b.lastName)
// });

// let ageFilter = nameSorter.filter(function(person){
//       return person.age > 18
// })

// console.log(sortedOfAge);

let nameAgeSorter = function(arr){
    return arr.sort(function (a, b){
        return a.lastName.localeCompare(b.lastName)
    }).filter(function(person){
        return person.age > 18

})}

let lister = nameAgeSorter(myPeople).map(function(person, i){
    return "<li>" + person.firstName + " " +  person.lastName + " is " + person.age + "</li>";
}) 

console.log(lister);
