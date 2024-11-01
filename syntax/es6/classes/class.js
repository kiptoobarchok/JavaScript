#!/usr/bin/node

// make a shape with attributes

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    // my methods
    showheight(){
        return `height : ${this.height}`;
    }
    
}


const shape1 = new Rectangle(3, 9);
console.log(shape1.showheight());

