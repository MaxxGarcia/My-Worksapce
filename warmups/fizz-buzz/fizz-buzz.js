var fizzBuzz = () => {
    var numberArray = [];
    for (let i = 0; i <= 100; i++) {
        var number = i;
        if ((number % 3 == 0) && (number % 5 == 0)){
            number = "fizzbuzz";
        } else if ((number % 3 == 0)){
            number = "fizz";
        } else if ((number % 5 == 0)){
            number = "buzz"
        } else {
            number = i;
        }
        numberArray.push(number);
    }
    return numberArray;
}

console.log(fizzBuzz());