// function collectAnimals(...animals) {  
//     return animals;
// }

// console.log(collectAnimals(animalArray,"dog", "cat", "mouse", "jackolope", "platypus")); 

// const fruit = ["apple", "pear"];  
// const sweets = ["cake", "pie"];  
// const vegetables = ["carrit"];

// const food = {
//     fruit: fruit,
//     sweets: sweets,
//     vegetables: vegetables
// }

// console.log(food);

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };

// const {location, duration} = vacation;
  
//   console.log(`We're going to have a good time in ${location} for ${duration}`)

// const items = [0,1,2,3,4,5]

// const [firstItem, secondItem] = items;

// console.log(firstItem);

// const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

// console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav);  


// function combineAnimals(...combine) {  
//     return combine;
// }

// const realAnimals = ["dog", "cat", "mouse"];  
// const magicalAnimals = ["jackolope"];  
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals)); 

// product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);

//   console.log(product(1,2,3,4,5));

// unshift = (...array) => array;

//   console.log(unshift(...[1,2,3,4],"a","b","c","d", "e"))

populatePeople = (...names) => names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
    })

console.log(populatePeople("Frank Peterson", "Suzy Degual", "Liza Jones") ) 



import React from 'react';
const App = (props) => {
    return (
        <div>
            <h1>Name: { props.name } </h1>
            <p>Age: { props.age } </p>
        </div>
    )
}
export default App;