// function everyFunction(arr, callback){
//     return callback(arr);
    
// }

// function someFunction(arr, callback, param){
//     return callback(arr, param)
// }

// typeOfCallback = (arr)=>{
//     let typeCheck = typeof arr[0];
//     let varType;
//     for (let i = 0; i < arr.length; i++) {
//         varType = typeof arr[i] === typeCheck;
//     }
//     return varType
// }

// findVarCallback = (arr, param) => {
//     let answer = false;
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] === param ? answer = true : null
        
//     }
//     return answer;
// }

// functionObject = {
//     findVarCallback,
//     typeOfCallback
// }


// console.log( everyFunction( [1,2,3], typeOfCallback ) );
// console.log( someFunction( [1,2,3], findVarCallback, 3 ) );

// module.exports = functionObject;

// String
// NumberObject
// Array.protoype
//     .map
//     .everyFunction

// const every = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         if(!callback(arr[i])){
//             return false
//         }
        
//     }
//     return true
// }

Array.prototype.every = function(callback){
    for (let i = 0; i < this.length; i++) {
        if(!callback(this[i])){
            return false
        }
        
    }
    return true
}

const myArr = [1, 2, 3, 4, 5, "6"]
console.log(myArr.every(num => typeof num === "number"))
