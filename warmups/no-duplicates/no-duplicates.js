
let duplicateRemover = function(str){
    var output = {
        noDupes: "",
        extras: ""
    }
    for (var i = 0; i < str.length; i++) {
        if (output.noDupes.includes(str[i])){
            output.extras += str[i];
        } else {
            output.noDupes += str[i];
        }
           
    }
    return output;
}

function minimalOperations(words) {
    let countArray = [];
    words.forEach(item => {
        let currentCount = 0;
        for(let i = 1; i < item.length ; i += 2){
                if(item[i] === item[i-1]){
                     currentCount++ 
                     console.log(item[i], item[i-1])
                }
                else if (item[i] === item[i+1]){
                    currentCount++ 
                    console.log(item[i], item[i+1])

                }
        }
         return countArray.push(currentCount)
    })
    return countArray
}

let myString = ["ubtkhbuzmlqkpbbbwrvstnjvxjbtncbwzorusdnzmkbdjvyhzzvugnchsy"]


console.log(minimalOperations(myString));
