// PROBLEM
// Write a function that takes a string argument and returns
// a list of substrings of that string, with each substring
// starting at the beginning of the word, and with substrings
// ordered from smallest to largest.
//
// EXAMPLES
// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// first solution
// - initialize empty array to hold substrings
// - iterate over index values from 0 to word.length - 1
//    - push slice of word from index 0 to currentIndex to substring
// - return substrings array
//
// second solution
// - initialize chars to return value of word.split('')
// - use map(_, index) and slice to create a substring of word from 0 to
//    current char (index + 1)
// - return the results of the map invocation
//
// CODE
'use strict';
// first solution
// function leadingSubstrings(word) {
//   let substrings = [];
//
//   for (let index = 1; index <= word.length; index += 1) {
//     substrings.push(word.slice(0, index));
//   }
//
//   return substrings;
// }

// second solution
function leadingSubstrings(word) {
  let chars = word.split('');
  return chars.map((_, index) => word.slice(0, index + 1));
}

// TESTS
console.log(String(leadingSubstrings('abc')) === String(["a", "ab", "abc"]));
console.log(String(leadingSubstrings('a')) === String(["a"]));
console.log(String(leadingSubstrings('xyzzy')) === String(["x", "xy", "xyz", "xyzz", "xyzzy"]));
