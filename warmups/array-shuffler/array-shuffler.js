const arrShuffler = (arr) =>{
    const newArray = [] 
    for (let i = 0; i < arr.length; i++) {
        const randomNum = Math.floor(Math.random()* arr.length);
        if( i < randomNum ){
           newArray.push(arr[i])
        }
        if(i >= randomNum){
          newArray.unshift(arr[i])
        }
    }
    return newArray
}

const arrShuffler2 = (arr) => {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        const randomNum = Math.floor(Math.random()* arr.length +1); 
        console.log(randomNum)
        i <= randomNum ? newArray.push(arr[i]) : newArray.unshift(arr[i]) 
    }
    return newArray
}

const arrShuffler3 = (arr) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
       newArray.splice(Math.floor(Math.random()* arr.length), 0, arr[i])
    }
    return newArray
}


//only works for numbers
const arrShuffler4 = (arr) => {
    arr.sort((item1) => {
       return item1 - arr[Math.floor(Math.random()* arr.length -1)]
    }) 
}

//instructor solution
const arrShuffler5 = (arr) =>{
   return arr.sort((a,b) =>
        Math.floor(Math.random() *3) -1)
}



console.log(arrShuffler5([1,2,3,4,5]))