// Create a function that takes in an array of employee objects.
// Each employee object will look something like this:
// { name: "Tony", yearsOfExperience: 10 }
// Your function should return the total years of experience for all of the employees.

// Examples:

// let employees = [
//   { name: "Tony", yearsOfExperience: 10 }, 
//   { name: "Carla", yearsOfExperience: 4 }
// ]
//
// calculateTotalYearsOfExperience(employees)
//     should evaluate to 14


let employees = [
  { name: "Oscar", yearsOfExperience: 10 }, 
  { name: "Rochelle", yearsOfExperience: 4 },
  { name: "Shane", yearsOfExperience: 2 },
  { name: "Greg", yearsOfExperience: 5 }
]

function calculateTotalYearsOfExperience(array) {
let totalExperience = 0;

  for (let employee of employees) {
    totalExperience += employee.yearsOfExperience;   
  }
  return (console.log('total years of experience:', totalExperience));
} 
calculateTotalYearsOfExperience(employees);

try {
  module.exports = calculateTotalYearsOfExperience;
} catch (err) {
  // do nothing...
}
