// PROBLEM
// Write a function that takes two array arguments,
// each containing numbers, and returns a new array
// containing the all possible products of the number
// pairs in the argument arrays. The return array should
// be sorted in ascending numerical order.
//
// EXAMPLE
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);
// // [2, 4, 4, 6, 8, 8, 12, 16]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - initialize empty results array
// - loop over elements in first array
//   - loop over elements in second array
//      - multiply current elements from first and
//        second array, and push to results array
// - return sorted results array
//
// CODE
'use strict';

function multiplyAllPairs(arr1, arr2) {
  let results = [];

  for (let index1 = 0; index1 < arr1.length; index1 += 1) {
    for (let index2 = 0; index2 < arr2.length; index2 += 1) {
      results.push(arr1[index1] * arr2[index2]);
    }
  }

  return results.sort((a, b) => a - b);
}
// TESTS
console.log(String(multiplyAllPairs([2, 4], [4, 3, 1, 2])) ===
            String([2, 4, 4, 6, 8, 8, 12, 16]));
