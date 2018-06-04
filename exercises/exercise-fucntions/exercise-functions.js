let functionTree = {
    numberSum(a, b){
        return a + b; 
    },
    largestNumber(a, b, c){
        var numberArray = [a, b, c]
        numberArray.sort(function(a, b){return b-a});
        return numberArray[0];
    },
    evenOdd(a){
        if (a % 2){
            return odd;
        }
            return even; 
    },
    stringMath(a){
        let aNew;
        if (a.length <= 20){
            return a+a;
        } 
        else {
            for (let i = 0; i < (Math.floor(a.length / 2)); i++) {
                aNew = a.slice(0,(a.length/2))
            }
            return aNew;
        }
    },
    fibonacci (num){
        var a = 1, b = 0, temp, end = [];
          for (i = 0; i < num; i++){
              end.push(a);
              temp = a;
              a = a + b;
              b = temp;
            }
            function getSum (total, number){
                return total + number;
            }
          
            return end + " sum: " + end.reduce(getSum);
          }
}

console.log(functionTree.stringMath("worldworldworldworldworld"));