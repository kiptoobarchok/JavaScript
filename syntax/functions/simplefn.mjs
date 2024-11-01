#!/usr/bin/node

function myFunc(){
    console.log('heyy, munchkin');
}

myFunc()// invocation

//Returning functions
function returningFunc(){
    const a = 21;

    return a;
}

returningFunc()

//default paramaters

function param(a, b=2) {
   return a + b;
}

console.log(param(4));

function greet(){
    return 'hello caleb';
}

console.log(greet)
console.log(greet())