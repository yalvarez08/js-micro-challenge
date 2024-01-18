// Create a function that takes in two numbers.

// If the first number is bigger than the second number, the function should
// return "The first number was bigger!"

// If the second number is bigger than the first number, the function should
// return "The second number was bigger!"

// If the numbers are the same, the function should return
// "The numbers are the same!"

// Examples:

// compareTwoNumbers(3, 2)
//     should evaluate to "The first number was bigger!" 

// compareTwoNumbers(2, 7)
//     should evaluate to "The second number was bigger!"

// compareTwoNumbers(7, 7);
//     should evaluate to "The numbers are the same!"


function compareTwoNumbers(firstNum, secondNum) {
  
  if (firstNum > secondNum){
    return("The first number was bigger!");
  }
  else if (firstNum < secondNum){
    return("The second number was bigger!");
  }
  else {
    return("The numbers are the same!");
  }
}
let result1 = compareTwoNumbers(0, 8);
console.log(result1);

let result2 = compareTwoNumbers(10, 10);
console.log(result2);

let result3 = compareTwoNumbers(5, 2);
console.log(result3);

try {
  module.exports = compareTwoNumbers;
} catch (err) {
  // do nothing...
}