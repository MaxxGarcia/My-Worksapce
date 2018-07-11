const ofThree = (n, counter = 0) => {
    if(n <= 1) return counter
    if (n % 3 === 0) return ofThree(n/3, counter +1);
    if (n % 3 === 1) return ofThree(n-1, counter)
    if (n % 3 === 2) return ofThree(n+1, counter)
}

console.log(ofThree(0))

module.exports = ofThree;