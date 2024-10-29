#!/usr/bin/node

//using backticks

let name = `caleb`;

console.log(name)

// escape character (\ - forward slash)

console.log("my fav phrase is \`you have power  over you mind , but not what's around you\`");


// template literal
// string interpolation ${}

let fname = "KIPTOO";
let lname = "CALEB";

console.log('\n')

console.log(`Hi my name is ${fname} ${lname} `)

console.log('\n')

console.log(`nickname = "boyo"`)
// helps in avaoiding concatenation
// ie

console.log("hi my name is " + fname + ' ' + lname)
console.log('\n')


// multiline strings - using template literals

let learnCoding = `how to start learning web development
for beginner
- learn HTML
- learn CSS
- learn Javascript

intermediate
- Js Framework ie React
- APIs
- mysql
`

console.log(learnCoding)
console.log('\n')

// using ( + )

let myTechStack = " - Python \n " + 
"- Javascript \n  " +
"- C"

console.log(myTechStack)