// balance = (str) =>{
//     var opening = 0;
//     var closing= 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === "(" || str[i] === ")"){
//             if (str[i] === ")"){
//                 closing++
//                 if (closing > opening){
//                     return false
//                 }
//             } else if (str[i] === "("){
//                 opening++
//             }
//         } else {
//             continue
//         }
//     }   
//     return true
// }
balance = (str) =>{
    let opening = 0;
    let closing= 0;
    let answer = true;
    for (let i = 0; i < str.length; i++) {
        str[i] === "(" ? opening++ : null
        str[i] === ")" ? closing++ : null
        closing > opening ? answer = false : null
    }  
    return answer
}
//same as above but with ternary operator

console.log(balance(")()"))

module.exports = balance;