// Create a function that takes in an array of arrays. Like so:
  // [
  //   [1, 5],
  //   [2],
  //   [5, 10, 3]
  // ]

// Your function must add up all of the numbers in all of the 
// arrays and return the value.

// Examples:
// let nestedNumbers = [
//   [1, 5],
//   [2],
//   [5, 10, 3]
// ]

// addNestedNumbers()
//     should evaluate to 26

let nestedValues = [
  [7],
  [15],
  [4, 8],
]
function addNestedNumbers(array) {
  let sum = 0;
  for (let i =0; i < array.length; i++) {
    sum += Array.isArray(array[i]) ? addNestedNumbers(array[i]):
    array[i];
  }
  return sum;
}
console.log('sum of all numbers in nested array:', addNestedNumbers(nestedValues));

try {
  module.exports = addNestedNumbers;
} catch (err) {
  // do nothing...
}
