// PROBLEM
// Write a function that takes an array of numbers and returns the
// sum of of the sum of each leading subsequence in that array.
//
// EXAMPLES
// sumOfSums([3, 5, 2]);    // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([4]);          // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// firstSolution
// - initialize subsequenceSums array to []
// - loop over elements in argument array by index
//    - reduce slice of argument aray from 0 to currentIndex
//    - push to subsequenceSums
// - reduce and return subsequenceSums
//
// secondSolution
// - call map on numberArray
//    - for each number, call slice from 0 to index of current number
// - reduce each subsequence
// - reduce array of sums and return the reduced value
//
// CODE
'use strict';
// first solution
// function sumOfSums(numberArray) {
//   let subsequenceSums = [];
// 
//   for (let currentIndex = 0; currentIndex < numberArray.length; currentIndex += 1) {
//     subsequenceSums.push(numberArray.slice(0, currentIndex + 1).reduce(
//       (sum, currentValue) => sum + currentValue,
//       0
//     ));
//   }
// 
//   let total = subsequenceSums.reduce(
//     (runningTotal, currentVal) => runningTotal + currentVal,
//     0
//   );
// 
//   return total;
// }

// second solution
function sumOfSums(numbers) {

  return numbers.map((number, index) => numbers.slice(0, index + 1)
                                                .reduce((subSum, value) => subSum + value))
                                                .reduce((totalSum, subSum) => totalSum + subSum);
}

// TESTS
console.log(sumOfSums([3, 5, 2]) === 21);
console.log(sumOfSums([1, 5, 7, 3]) === 36);
console.log(sumOfSums([4]) === 4);
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35);
