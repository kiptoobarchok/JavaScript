#!/usr/bin/node

// defining an empty function

function empty(par){
    //pass
}

const emp = empty();
console.log(emp) //does not return a value


function two(par){
    return "hello!!!";
}

console.log(two());

function add(a, b){
    return (a + b);
}

console.log(add(2, 3));
