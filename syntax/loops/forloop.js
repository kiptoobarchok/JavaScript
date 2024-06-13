#!/usr/bin/node


for (var i = 0; i < 11; i++) {
    console.log("Hello Caleb")
}

var num = [11, 12, 13, 14, 15, 16]

var squareNum = []

for (i = 0; i <num.length; i++) {
    squareNum.unshift(num[i] ** 2)
}

console.log(squareNum)