// PROBLEM
// Write a function that takes an array of integers between
// 0 and 19 and returns an array of those integers sorted based
// on the English word for each number:
//
// zero, one, two, three, four, five, six, seven, eight, nine, ten,
// eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen,
// eighteen, nineteen
//
// Do not mutate the argument.
//
// EXAMPLE
// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// //[8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
//
// DATA STRUCTURE
// Array to hold English number words
//
// ALGORITHM
// - make a copy of argument
// - substitute English words for numbers in copy using map
// - sort copy
// - use map to substitute numbers for English words
// - return copy
//
// CODE
'use strict';

const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

// function alphabeticNumberSort(numberArray) {
//   let arrayCopy = numberArray.slice(0);
//
//   return arrayCopy.map(elem => NUMBER_WORDS[elem])
//     .sort()
//     .map(elem => NUMBER_WORDS.indexOf(elem));
// }

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}

// TESTS
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19];
console.log(
  String(alphabeticNumberSort(numbers)) ===
  String([8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7,
    17, 6, 16, 10, 13, 3, 12, 2, 0]));
