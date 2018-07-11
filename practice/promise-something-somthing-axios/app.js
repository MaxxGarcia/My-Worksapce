// Javascript Promise //

// const arr = new Promise();
//Object(), Date(), Boolean(), String(), Promise()

const arr = new Promise(function(resolve, reject){

});
// a promise can be in 1 of 3 states
    // fulfilled
    // rejected
    // pending
        //a pending promise may transition into a fulfilled or rejected state
        // once fullfilled/rejected, it cannot change it's status


function wait(time){
    return new Promise(function(resolve, reject){
        return setTimeout(reject, time)
    })
}

wait(2000)
    .then(()=> console.log("dinner is ready"))
    .catch((err)=> console.log(err))