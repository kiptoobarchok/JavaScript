#!/usr/bin/node
"var keyword has some cons to using it and thus let and const preffered"

var name = "caleb"
console.log(name)

"Redeclaration overrides existing data stored in the variable"
var name = "kiptoo"
console.log(name)

"problem 2 with var keyword"
var age = 18
 if (age === 18){
    var legality = "yes"
    console.log(legality)
 }
"our scope variable is accessible outside its scope"
 console.log(legality)