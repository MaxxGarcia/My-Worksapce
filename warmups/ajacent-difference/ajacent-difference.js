const difference = (arr) =>{
    let mathStorage = 0;
    let arrayStorage;
    for (let i = 1; i < arr.length -1 ; i++) {
        if (mathStorage < arr[(i-1)].length + arr[i].length + arr[(i+1)].length){
            mathStorage = arr[i-1].length + arr[i].length + arr[(i+1)].length;
            arrayStorage = [arr[(i-1)], arr[i], arr[(i+1)]];            
        }        
    }
    return arrayStorage;
}

console.log(difference(["this", "is", "an", "array"]));

module.exports = difference;