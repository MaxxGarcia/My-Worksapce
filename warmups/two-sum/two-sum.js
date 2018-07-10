twoSum = (arr, num) =>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num){
                if (!(arr[i] === arr[j])){
                return [i, j]
                }
            } 
        }       
    }
    return "Not Found" 
} 

console.log(twoSum([1, 2, 3], 5))

module.exports = twoSum;