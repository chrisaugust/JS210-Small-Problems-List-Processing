// PROBLEM
// Write a function that returns a list of all palindromic substrings
// of a string provided as argument.
//
// Returned palindromic substrings should be sorted by order of
// appearance in input string. Duplicate substrings should be
// included.
//
// Consider all punctuation and case, ie 'AbcbA' is a palindrome but
// neither 'Abcba' nor 'Abc-bA' would qualify.
//
// EXAMPLES
// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]
//
// palindromes('hello-madam-did-madam-goodbye');
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
//
// palindromes('knitting cassettes');
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - write an isPalindrome method that compares an argument string
//   to a string that is the argument in reverse order, returning true
//   if the strings match
//
// - initialize empty palindromes array
// - generate substrings
// - iterate over substrings, checking if the substring is a palindrome;
//   push to palindromes array if it is a palindrome
// - return palindromes array
//
// CODE
'use strict';

function isPalindrome(str) {
  return str === str.slice().split('').reverse().join('');
}

function substrings(str) {
  return str.split('')
    .map((_, index) => leadingSubstrings(str.slice(index)))
    .flat();
}

function leadingSubstrings(str) {
  let chars = str.split('');
  return chars.map((_, index) => str.slice(0, index + 1));
}

function palindromes(str) {
  let substringsArray = substrings(str);
  let palindromes = [];

  for (let index = 0; index < substringsArray.length; index += 1) {
    let currentSubstring = substringsArray[index];
    if (isPalindrome(currentSubstring) && currentSubstring.length > 1) {
      palindromes.push(substringsArray[index]);
    }
  }

  return palindromes;
}

// TESTS
// isPalindrome
console.log(isPalindrome('tacocat') === true);
console.log(isPalindrome('tacotruck') === false);

// palindromes
console.log(String(palindromes('knitting cassettes')) ===
  String([ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]));
console.log(String(palindromes('hello-madam-did-madam-goodbye')) ===
  String([ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
    "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
    "-madam-", "madam", "ada", "oo" ]));
console.log(String(palindromes('abcde')) === String([]));
