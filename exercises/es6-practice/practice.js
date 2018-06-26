// // var name = 'John'  
// // var age = 101  
// // var pets = ["cat", "dog"]

// // var petObjects = []

// // for (var i = 0; i < pets.length; i++){  
// //   var pet = {type: pets[i]}
// //   if (pets[i] === "cat"){
// //     var name = "fluffy"
// //   } else {
// //     var name = "spot"
// //   }
// //   pet.name = name
// //   petObjects.push(pet)
// // }

// const name = 'John'  
// let age = 101  
// const pets = ["cat", "dog"]

// const petObjects = []

// for (var i = 0; i < pets.length; i++){  
//   let pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//     let name = "fluffy"
//   } else {
//     let name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }

// const vegetables = carrots.map(function(carrot){  
//     return {type: "carrot", name: carrot}
// })
// const vegetables = carrots.map((carrot) => ({type: "carrot", name: carrot}));

// // friends = people.filter(function(person){  
// //     return !!person.friendly
// // })
// friends = people.filter(person => !!person.friendly)

// // function doMathSum(a, b){  
// //     return a + b
// // }

// // var produceProduct = function(a, b){  
// //     return a * b
// // }
// const doMathSum = (a, b) =>  a + b;
// const produceProduct = (a, b) => a * b;

// const introduce = (firstName, lastName, age) => {
//     firstName = firstName || "Jane"
//     lastName = lastName || "Doe"
    
//     `hello  ${firstName} ${lastName}, how does it feel to be 40`;}
// console.log(introduce("maxx", "garcia", 27))

// // const dogs = animals.filter((animal)=>{  
// //     if (animal.type === "dog"){
// //       return true
// //     } else {
// //       return false
// //     }
// //   })
//   const dogs = animals.filter((animal) => animal.type === "dog");

//   const greeting = (location, name) => {
//       if(location == "Hawaii" && name == "Janice")
//       return `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} if you need anything. `

// };

// console.log(greeting("Hawaii", "Janice"));