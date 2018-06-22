function antiCaps(str){
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()){
            newString = newString.concat(str[i].toLowerCase());
            continue;
        } else if (str === ""){
            return newString;
        } else {
            newString = newString.concat(str[i].toUpperCase());
            continue;
        }
    }
    return newString;
}

// console.log(antiCaps(""));

//testing

function antiCapsTwo(str){
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()){
            newString += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
            continue;
        }
    }
    return newString;
}

module.exports = antiCaps;
