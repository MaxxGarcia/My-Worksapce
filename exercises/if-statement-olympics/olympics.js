console.log("PRELIMINARIES");

if (5 > 3){
    console.log("is greater than");
} 

if ("cat".length === 3) {
    console.log("is the length");
}

if ("cat" === "dog"){
    console.log("you done messed up");
} else {
    console.log("not the same");
}

var person = {  
    name: "Bobby",
    age: 12
  }

console.log("BRONZE MEDAL");

if (person.age > 18){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is NOT allowed to go to the movie");

}

if (person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is NOT allowed to go to the movie");

}

if (person.name[0] === "B" && person.age > 18){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is NOT allowed to go to the movie");

}

console.log("Silver Medal");

if (1 === "1"){
    console.log("strict");
} else if (1 == "1"){
    console.log("loose");
} else {
    console.log("not equal at all");
}

if (1 <= 2 === 4 || (4 > 10 && 5+10 > 10) ){
    console.log("yes");
}

console.log("Gold Medal");

if (typeof "dog" === 'string'){
    console.log("that is a string");
}

if (typeof "true" == 'boolean') {
    console.log("yeah that is a boolean")
} else {
    console.log("dawg that ain't no boolean")
}

let myVariable;

if (myVariable === undefined){
    console.log("you did it")
}

if ("z".charCodeAt(0) === 122){
    console.log("if z = 122 then all numbers are less than 122");
} else {
    console.log("naw bro");
}

function oddEven(num) {
    if (num % 2 === 0){
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
}

oddEven(4);
