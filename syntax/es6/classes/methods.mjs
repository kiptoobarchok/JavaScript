#!/usr/bin/node

// methods in es6

export default class Person {
  constructor (firstName, lastName, id , baseSalary) {
    if (typeof(firstName) !== 'String') {
      console.error('first name must be a string');
  }
  
  if (typeof(lastName) !== String) {
      console.error('last name must be a string');
  }

  if (typeof(id) !== 'number') {
    console.error('id must be a number');
}
if (baseSalary !== String) {
  console.error('baseSalary must be a string');
}
    this._firstName = firstName;
    this._lastName = lastName;
    this._id = id;
    this._baseSalary = baseSalary;
  
  }
  
  fullName() {
    return `[${this._firstName} ${this._lastName}]`;
  }

  // setter 
  set firstName(value) {
    if (value !== String) {
        console.error('first name must be a string');
    } else {
        this._firstName = value;
    }
  }

  // getter
  get firstName() {
    return this._firstName;
  }

   // setter 
   set lastName(value) {
    if (typeof(value) !== String) {
        console.error('last name must be a string');
    } else {
        this._lastName = value;
    }
  }

  // getter
  get lastName() {
    return this._lastName;
  }

 // setter 
 set id(value) {
    if (typeof(value) !== "number") {
        console.error('id must be number');
    } else {
        this._id = value;
    }
  }

  // getter
  get id() {
    return this._id;
  }

 // setter 
 set baseSalary(value) {
    if (typeof(value) !== String) {
        console.error('base salary must be a string');
    } else {
        this._lastName = value;
    }
  }

  // getter
  get baseSalary() {
    return this._baseSalary;
  }

}
