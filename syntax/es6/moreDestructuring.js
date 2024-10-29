#!/usr/bin/node

// how to use Array Destructuring to extract values from an array to a function parameter

const profile = ["KIPTOO", "CALEB"]

function userBio(fname, lname){
    return (`Bio ${fname} \n ${lname}`);

}
//invoke userBio while passing profile array as argumentnode
userBio(profile);

const edibles = ["food", "fruits"];

let [one, two] = edibles;

console.log(`this is ${two}`)

