var letterFrequency = function (phrase){
    var output ={};
    var removed = [];
    for (let i = 0; i < phrase.length; i++) {
           var control = phrase[i];
           if (output[control]){
                output[control]++;
           } else {
                 output[control] = 1;
           }
    }
    return removed;
}

console.log(letterFrequency('test'));