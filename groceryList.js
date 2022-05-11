// PROBLEM
// Write a function that takes a grocery list in a two-dimensional
// array and returns a one-dimensional array. Each element in the
// argument array contains a fruit name and a number representing
// the desired quantity of that fruit. The output array will contain
// the name of the fruit appearing n times, where n is the number
// associated with that fruit name in the argument array.
//
// EXAMPLE
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - initialize empty array purchasedFruits
// - pass elements in argument array to map
//    - for loop while count < elem[1]
//       - push elem[0] to purchasedFruits
// - return purchasedFruits
//
// CODE
'use strict';

function buyFruit(fruitsArray) {
  let purchasedFruits = [];

  fruitsArray.forEach((fruit) => {
    let fruitName = fruit[0];
    let quantity = fruit[1];

    for (let count = 1; count <= quantity; count += 1) {
      purchasedFruits.push(fruitName);
    }
  });

  console.log(purchasedFruits);
  return purchasedFruits;
}
// TEST
console.log(String(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]])) === String(["apple", "apple", "apple", "orange", "banana", "banana"]));

console.log(String(buyFruit([['papaya', 2], ['mamey sapote', 3], ['tamarindo', 5]])) ===
String(['papaya', 'papaya', 'mamey sapote', 'mamey sapote', 'mamey sapote', 'tamarindo', 'tamarindo', 'tamarindo', 'tamarindo', 'tamarindo']));
