let numberArray = [1,2,3];

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

let arraySum = numberArray.reduce(function(accumulator, number){
    return accumulator + number;
})

let arrayString = numberArray.reduce(function(accumulator, number){
    return accumulator.toString() + number.toString();
})

let voteCount = voters.reduce(function(accumulator, voter){
    if (voter.voted) return accumulator + 1;
    return accumulator
}, 0)

let shoppingSpree = wishlist.reduce(function(accumulator, item, i){
    return accumulator + item.price;
},0)

let flatten = arrays.reduce(function(accumulator, array){
    return accumulator + array;
})

// function voterResults(voters){
//     return voters.reduce(function(accumulator, voter){
//         if (voter.age <= 25) {
//             return accumulator.youth += 1; 
//         }
//         return accumulator;
//     },{ youngVotes: 0,
//     youth: 0,
//     midVotes: 0,
//     mids: 0,
//     oldVotes: 0,
//     olds: 0
//   })
// }

let voterResults = voters.reduce(function(accumulator, array){
    return accumulator.youth += 1
},{ youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0
  })
console.log(voterResults)