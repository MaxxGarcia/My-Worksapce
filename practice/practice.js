function almostIncreasingSequence(sequence) {
    let counter = 0;
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] + 1 !== sequence[i + 1]) {
            console.log(i)
            // console.log(sequence[i], sequence[i+1])
            counter += 1;
            if (counter > 1) return false;
            sequence.splice(i + 1, 1)
            console.log(sequence)
            i = -1
        }
    }
    return true
}


console.log(almostIncreasingSequence([10, 1, 2, 3, 4, 5]))


database=[{name: "Maxx", price: 10, alive: false}, {name: "Amelia", price: 100, alive: true}]