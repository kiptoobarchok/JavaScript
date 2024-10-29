#!/usr/bin/node

const names = ["caleb", "kevin", "abel", "peter"]

let  first_name = names[0]
let second_name = names[1]
let third_name = names[2]

console.log(`number 1 : ${first_name}`)
console.log(`number  2 : ${second_name}`)
console.log(`number  3 : ${third_name}`)
console.log(names[3])


// to avoid DRY

const sec_names = ["kiptoo", "kipngetich", "kiprob", "kipkurui"];

const [firstName, secName, thirdName] = sec_names;

console.log(`his second name is ${secName} and first ${second_name}`)


//direct destructuring
const [food, drink, stew] = ["pilau", "soda", "beefstew"];

console.log(stew)
console.log(`my go-to meal: ${food}`)

const [fname, lname, ighandle, website] = ["KIPTOO",
    "CALEB",
    "_actually_caleb",
    "kiptoobarchok.netlify.app"
]
console.log(fname);
console.log(website);

//extracting values at any index using default values

const bio = [];
const [companyName = "@AURA", field = "software"] = bio 
console.log(companyName);
