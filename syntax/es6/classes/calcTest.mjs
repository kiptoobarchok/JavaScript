import myCalc from './calculator.mjs';

const numbers = new myCalc('4', 5);
console.log(numbers)

console.log(numbers.displayFullNumbers())

console.log(numbers.sum())