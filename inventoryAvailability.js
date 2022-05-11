// PROBLEM
// Write a function that returns true or false based on whether
// or not an inventory item is available. The function takes two
// arguments, an inventory item and a list of transactions. The
// function should only return true if the sum of the quantity
// values of the item's transactions is greater than 0.
//
// EXAMPLES
// const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                        { id: 105, movement: 'in',  quantity: 10 },
//                        { id: 102, movement: 'out', quantity: 17 },
//                        { id: 101, movement: 'in',  quantity: 12 },
//                        { id: 103, movement: 'out', quantity: 15 },
//                        { id: 102, movement: 'out', quantity: 15 },
//                        { id: 105, movement: 'in',  quantity: 25 },
//                        { id: 101, movement: 'out', quantity: 18 },
//                        { id: 102, movement: 'in',  quantity: 22 },
//                        { id: 103, movement: 'out', quantity: 15 }, ];
//
// isItemAvailable(101, transactions); // false
// isItemAvailable(105, transactions); // true
//
// DATA STRUCTURE
// Array of Objects
//
// ALGORITHM
// - use transactionsFor to produce a list of transactions involving
//   the item in question
// - initialize inventoryCount to 0
// - call forEach, to
// - call reduce, to sum the values for the quantity property of the
//   transaction objects for that item (with 'in' and 'out' values
//   for the movement property reflecting positive and negative sign
//   for the quantity)
// - compare sum with 0, return true if greater than 0
//
// CODE
'use strict';

function transactionsFor(item, transactions) {
  return transactions.filter((trans) => trans.id === item);
}

function isItemAvailable(item, transactions) {
  const transactionsForItem = transactionsFor(item, transactions);

  let inventoryCount = 0;
  transactionsForItem.forEach(({movement, quantity}) => {
    if (movement === 'in') inventoryCount += quantity;
    if (movement === 'out') inventoryCount -= quantity;
  });

  console.log(transactionsForItem);
  console.log(inventoryCount);

  return inventoryCount > 0;
}

// TESTS
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions) === false);
console.log(isItemAvailable(105, transactions) === true);
