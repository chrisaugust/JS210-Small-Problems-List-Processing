// PROBLEM
// Write a function that returns a list of all substrings of a string argument.
// Order the returned list by where in the string the substring begins. Meaning
// all substrings that start at index 0 come first, followed by substrings
// starting at index 1, etc. Return substrings that start at a given index
// from shortest to longest.
//
// EXAMPLES
// substrings('abcde');
//
// returns:
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// first solution
// - initialize empty substrings array
// - outer loop: iterate over index values from 0 to word.length - 1
//   with startIndex
//    - inner loop: iterate from startIndex to word.length with endIndex
//      - push word.slice(startIndex, endIndex) to substrings
// - return substrings
//
// second solution
// - split string into chars
// - map each char to substring of argument str starting at current index
// - flatten and return results from map
//
// CODE
'use strict';
// solution 1
// function substrings(str) {
//   let substrings = [];
//
//   for (let start = 0; start < str.length; start += 1) {
//     for (let end = start + 1; end <= str.length; end += 1) {
//       substrings.push(str.slice(start, end));
//     }
//   }
//
//   return substrings;
// }
//
// solution 2 using map 

function substrings(str) {
  return str.split('')
    .map((_, index) => leadingSubstrings(str.slice(index)))
    .flat();
}

function leadingSubstrings(str) {
  let chars = str.split('');
  return chars.map((_, index) => str.slice(0, index + 1));
}

// TESTS
console.log(substrings('abcde'));
console.log(substrings('123456789'));
