
// function sum(x, y){  
//     //check data types first and throw error
//     if (!(x === Number(x))){
//         throw "x has to be a number";
//     } else if (!(y === Number(y))){
//         throw "y has to be a number";
//     }
//     return x + y;
// }
// try {
//   console.log(sum("1", "2"));
// } catch(err) {
//     console.log(err);
// }


// var user = {username: "sam", password: "123abc"};  
// function login(username, password){  
//   if (username !== user.username || password !== user.password){
//       throw "incorect login info"
//   }
//   console.log("login successful;")
// }

// try {
//     login(user.username, user.password)
// }catch(err) {
//     console.log(err)
// }

var input = 'Hello World!';
try {
    if (input.length < 5) {
        throw "Shorter than 6";
    } else if (input.length > 5) {
        throw "Longer than 5";
    } else if (input.length === 5) {
        throw "Exactly 5";
    }
}
catch(err) {
    console.log(err)
}