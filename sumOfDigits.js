// PROBLEM
// Write a function that takes a positive integer argument
// and returns the sum of its digits, without using for, while,
// or do..while loops.
//
// EXAMPLES
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45
//
// ALGORITHM
// - initialize sum to 0
// - coerce argument to string
// - split string into an array
// - reduce (coerce digit back to number, add to sum)
// - return sum
//
// CODE
'use strict';

function sum(int) {
  return String(int)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

// TESTS
console.log(sum(23) === 5);
console.log(sum(496) ===  19);
console.log(sum(123456789) === 45);
