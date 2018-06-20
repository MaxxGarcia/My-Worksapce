localStorage.setItem("foo", "bar");
localStorage.setItem("myAge", 30);

var myFavPlace = {
    name: "My house",
    location: "In the basement"
}

localStorage.setItem("myFavPlace", JSON.stringify(myFavPlace));
localStorage.setItem("primes", JSON.stringify([2,3,5,7,11]));

var foo = localStorage.getItem("foo");
console.log(foo);

var myAge = +localStorage.getItem("myAge");
console.log(myAge + " " + typeof myAge)

var favPlace = localStorage.getItem("myFavPlace");
console.log(JSON.parse(favPlace))

var primes = localStorage.getItem("primes");
console.log(JSON.parse(primes))

// always stringify with JSON so that you can parse the data when you want it back