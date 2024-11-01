#!/usr/bin/bash node

export default class Rectangle {
  constructor (width, height) {
    this._width = width;
    this._height = height;
  }

  // getter for area of rectangle
  get area() {
    return this._width * this.height;
  }

  //setters for width and height and their type validation
  set width(value) {
    if (value > 0) {
      this._width = value;
    }
    else {
      console.log(`${this._width} must be a positive integer`);
    }
  }

  set height(value) {
    if (value > 0) {
      this._height = value;
    }
    else {
      console.log(`${this._height} must be a positive integer`);
    }
  }

  // getters for width and height

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }
}
