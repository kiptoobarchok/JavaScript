#!/usr/bin/node
///function to create a left-pyramid

function leftPyramid(height){
    for (let i = 0; i <= height; i++){
        let row=''
        for (let j = 0; j <= i; j++){
            row += '#'
        }
        console.log(row)
    }
}

leftPyramid(8)


// right pyramid function
function rightPyramid(height){
    for (let i = 0; i <= height; i++){
        let row=''
        for (let j = 0; j < height - i; j++) {
            row += '*'
        }
        for (let k = 0; k < i; k++){
            row += ' '
        }
        console.log(row)
    }
}

rightPyramid(5)

// using repeat method

function pyramid(height){
    for (let i = 1; i <= height; i++){
        let row = "*".repeat(i)
        console.log(row)
    }
}

pyramid(6)