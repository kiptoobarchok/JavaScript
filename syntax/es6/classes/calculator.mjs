#!/usr/bin/node

// A simple calculator to perform simple calculations and conversions of two numbers

export default class myCalc {
    constructor(num1 , num2) {
        if (typeof(num1) !== 'number') {
            console.error(`${num1} must be a Number(integer)!!!`);
        }

        if (typeof(num2) !== 'number') {
            console.error(`${num2} must be a Number(integer)!!!`);
        }


        this._num1 = num1;
        this._num2 = num2;
    }

    set num1(value) {
        if (typeof(this.num1) !== 'number'){
            console.error("Num1 must be an integer");
        } else {
            this._num1 = num1;
        }
    }

    //getter
    get num1(){
        return this._num1;
    }

    // sum 
    sum(){
        var res = this._num1 + this._num2;
        return `${this._num1} + ${this._num2} = ${res}`;
    }

    displayFullNumbers(){
        return (`num1 : ${this._num1}\nnum2 : ${this._num2}`)
    }
}