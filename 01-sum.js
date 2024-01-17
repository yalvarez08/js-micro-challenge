// Create a function that takes in two numbers.
// Your function should return the sum of the two numbers passed in.

// Examples:

// sum(2, 3) 
//     should evaluate to 5

// sum(2, 7)
//     should evaluate to 9



function sum(num1, num2) {
  let add = num1 + num2;
  return add;
}

console.log('sum of 2 & 3 is', sum(2, 3));
console.log('sum of 2 & 7 is', sum(2, 7));
console.log('sum of 10 & 6 is', sum(10, 6));

try {
  module.exports = sum;
} catch (err) {
  // do nothing...
}
