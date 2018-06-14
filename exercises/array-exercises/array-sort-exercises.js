let numbers = [1, 3, 5, 2, 90, 20];
let theArray = ["dog", "wolf", "by", "family", "eaten"];

let theObject =[  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

let leastToGreatest = numbers.sort(function(a, b){
    return a - b;
});

let greatestToLeast = numbers.sort(function(a, b){
    return b - a;
});

let lengthSort = theArray.sort(function(a, b){
    return a.length - b.length;
});

let alphabetical = theArray.sort();

let byAge = theObject.sort(function(a, b){
    return a.age - b.age;
});


console.log(byAge)