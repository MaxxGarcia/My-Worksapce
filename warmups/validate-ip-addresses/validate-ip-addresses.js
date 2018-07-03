// validateAddress = str =>{
    // const splitAddress = str.split(".")
    
    // let answer;
    // console.log(splitAddress)
    // if (splitAddress.length != 4){
    //     return false
    // } else {
    //     for (let i = 0; i < splitAddress.length; i++) {
    //         if (Number(splitAddress[i]) <= 255 && Number(splitAddress[i] >= 0)) {
    //             answer = true
    //         } else {
    //            return false
    //         };
    //     }
    // }
    // return answer;
// }

// Marcus answer
// const ipValidate = str => { return str.split('.').filter(num => num >= 0 && num <= 255 && num !== '' ).length === 4}

const validateAddress = str => str.split(".").filter(num => num >= 0 && num <= 255 && num !=="" && num !==" ").length === 4


console.log(validateAddress("172.16..1"))

module.exports= validateAddress;