#!/usr/bin/node


//our promise
let promise = new Promise(function(resolve, reject) {
 
    let success = true;

    if (success) {
        resolve("operation success")
    } else {
        reject("failed")
    }

});
// no output if run

"handling promises"

promise
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
    //runs regardless of outcome
    .finally(() => {
        console.log("operation completed")
    })

"example with asynchronous op"
 let asyncTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("task completed!!");
    }, 2000);
 });

asyncTask
    .then(result => console.log(result))
    .catch(error => console.error(error));