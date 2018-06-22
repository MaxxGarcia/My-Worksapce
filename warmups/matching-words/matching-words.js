const theCode = `Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.`

const decoderFunction = ((theCode) => {
    const codeArray = theCode.replace(/[^a-z\s]/ig, '').toLowerCase().split(" ");
    const finalArray = [];
    const filteredCode = codeArray.filter((word, i) =>  (codeArray.indexOf(word, i+1) > -1))
    const doubleFilteredCode = filteredCode.filter((word) => {
        if (finalArray.indexOf(word) == -1){
            finalArray.push(word);
        }
    })
    return finalArray;
})

// const decoderFunction = ((theCode) => {
//     const codeWordsOnly = theCode.replace(/[^a-z\s]/ig, '').toLowerCase();
//     const codeArray = codeWordsOnly.split(" ");
//     const sorter = {};
//     const output = [];
//     splitted.forEach(word => {
//         if(sorter.hasOwnProperty(word)){
//             output.push(word);
//         } else {
//             sorter[word] = word;
//         }
//     })
// })



console.log(decoderFunction(theCode));

module.exports = decoderFunction;