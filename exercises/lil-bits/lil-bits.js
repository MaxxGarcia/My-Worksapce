binaryConvert = (x) => {
    console.log(x.toString(2));   
}
    // binaryConvert(2);

 convertToBinary = (num) => {
    let remainder = [];
    while(num > 0) {
        remainder.unshift(num % 2);
        num = Math.floor(num / 2);
    }
    answer = remainder.join("");
    return console.log(answer);
}

convertToBinary(2);