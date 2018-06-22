function findMissingNo(array){
    var sortedArray = array.sort(function(a,b){
        return a -b;
    })
    for (let i = 0; i < sortedArray.length; i++) {
       if(sortedArray[i] - sortedArray[i+1] !== -1)
        return sortedArray[i]+1;
    }
}
// console.log(findMissingNo([2,1,3,5]));

module.exports = findMissingNo;