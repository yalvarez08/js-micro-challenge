// Create a function that takes in an array of numbers.
// Your function should return the sum of the first and last
// numbers from the array.

// Examples:

// addFirstAndLast([3, 2, 6])
//     should evaluate to 9

// addFirstAndLast([-9, 12, 33, 29])
//     should evaluate to 20

let numberListOne = [4, 5, 6, 2];
let numberListTwo = [3,-15,62,18,30];
let numberListThree = [0,16,33,9,2,19];

function addFirstAndLast(numbers) {
  let totalSum = numbers.at(0) + numbers.at(numbers.length - 1);
  return totalSum;
}

let list1 = addFirstAndLast(numberListOne);
console.log(`sum of first and last array number: ${list1}`);

let list2 = addFirstAndLast(numberListTwo);
console.log(`sum of first and last array number: ${list2}`);

let list3 = addFirstAndLast(numberListThree);
console.log(`sum of first and last array number: ${list3}`);


try {
  module.exports = addFirstAndLast;
} catch (err) {
  // do nothing...
}