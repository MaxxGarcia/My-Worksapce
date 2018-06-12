// let generator2 = function (num) {
//     let main = {
//         caps : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//         lowers : "abcdefghijklmnopqrstuvwxyz",
//         numbrers : "1234567890",
//         symbols : "!@#$%^&*?<>+-=",
//         password : []
// }
//     for (let i = 0; main.password.length < num ; i++) {
//         main.password[i] = main[i][Math.floor(Math.random() * main[i].length)]
//     }
//     return main.password.join("");
// }

let generator = function (num) {
    let password = ""
    for (let i = 0; i < num; i++) {
        let variable = Math.floor(Math.random() * 93) + 33
    password += String.fromCharCode(variable);
} 
    return password;
}

console.log(generator(9));
