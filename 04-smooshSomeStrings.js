// Create a function that takes in an array of strings and
// a number.
// Your function should return a string that combines all of
// the array's values starting at the index position of the
// number that is passed into the function.


// Examples:

// smooshSomeStrings(["ASDF", "BLAH", "Oh!", "Hi", "There!"], 3)
//     should evaluate to "HiThere!"

// smooshSomeStrings(["Turtle", "dolphin", "Boop", "Beep", "Boop"], 1)
//     should evaluate to "dolphinBoopBeepBoop"

let randomArr1 = ['animal', 'crackers', 'in', 'my', 'soup'];

function smooshSomeStrings(array, n) {
  console.log(array.join(''));
}

smooshSomeStrings(randomArr1);

try {
  module.exports = smooshSomeStrings;
} catch (err) {
  // do nothing...
}
