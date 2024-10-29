#!/usr/bin/node

// without using destructuring techniques

const profile = ["KIPTOO", "CALEB", "_actually_caleb", "software dev"];

const fname = profile[0];
const lname = profile[1];
const igHandle = profile[2];
const job = profile[3]

console.log(`he is a ${job}`)

//using destructuring techniques

const [firstName, lastName , tagName, work] = profile

console.log(`first name : ${firstName}`)

//direct array destructuring
const [frontend, backend, Db] = ["Html/CSS and JavaScript(React)", "Python/ Flask", "mysql"];

console.log(Db)

// separate variables from declaration

let bro1, bro2, bro3

[ bro1, bro2, bro3 ] = ["abel", "caleb", "kiptoo"]

console.log(bro1) // res = abel

// assign rest of an array literal to a variable
//ie

const [name, ...moreInfo] = ["caleb", "software dev", 22, 'ALX student']

console.log(`more on ${name} : ${moreInfo}`)

// default values work in a destructuring assignment

let me  = [DNS = "kiptoobarchok.netlify.app", ipAddress = "152.72.54.2"];

console.log(`my ip address : ${ipAddress}`)


me[0] = ["kiptoobarchok.github.com"]

console.log(DNS)

let {one , two} = numbers;

let num = {three, four , five};

console.log(1)