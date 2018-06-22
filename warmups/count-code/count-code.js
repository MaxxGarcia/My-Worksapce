// function countCode(codeString) {
//     let count = 0;
//     for (let i = 0; i < codeString.length; i++) {
//     if (codeString[i].toLowerCase() === "c"){
//         if (codeString[i + 1].toLowerCase() === "o"){
//             if (codeString[i + 3].toLowerCase() === "e"){
//                 count++;
//             }
//         }
//     }
//     }
//     return count;
// }

function countCode(codeString) {
    return codeString.match(/co\we/ig).length; 
}

console.log(countCode("codecozeCodexvdgcoxe"));