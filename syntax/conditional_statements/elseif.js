#!/usr/bin/node

var score = 90

if (score  <= 100 && score > 90) {
    console.log("A")
}

else if (score <= 90 && score > 80) {
    console.log("B")
}

else if (score <= 80 && score > 70) {
    console.log("C")
}

else if (score <= 70 && score > 60) {
    console.log("D")
}

else if (score <= 60 && score > 50) {
    console.log("E")
}
else if (score <= 50 && score > 40) {
    console.log("F")
}

else {
    console.log("X")
}
