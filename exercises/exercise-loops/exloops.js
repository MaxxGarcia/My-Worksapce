
function stringInput(sInput){
    for (let i = 0; i < sInput.length; i++) {
        console.log(sInput[i])
    }
}

stringInput("hello");

function findLetter(sInput,singleLetter){
    let counting = 0;
    for (let i = 0; i < sInput.length; i++) {
        if ((sInput[i] == singleLetter)){
            console.log(i+1);
            counting++;
        } else if (i == sInput.length - 1 && counting === 0){
            console.log("That letter is found " + counting + " times")
        } else if (!(sInput[i] == singleLetter)){
            continue;
        } else {
            console.log("you doin something wrong")
        }
    }
} 

findLetter("stringi", "i");

function find42(numberArray){
    for (let i = 0; i < numberArray.length; i++) {
        if ((numberArray[i] === 42)){
            console.log("42 is found");
            return;
        } else if (i == numberArray.length - 1){
            console.log("That number is not found");
        }
        }
    }

    find42([4, 8, 17, 999, 42, 333]);

    function sort(arrayOf10){
        arrayOf10.sort(function(a, b){return a-b});;
        console.log(arrayOf10[0]);
    }

    sort([2, 3, 4, 5, 6, 7, 1, 8, 0, 9, 10])