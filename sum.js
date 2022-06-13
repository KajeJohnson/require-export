// Create another JavaScript file sum.js. It exports a single function. This is a function that takes an array of numbers as a parameter and returns the sum of those numbers.

// const { numbers, name, hometown } = require("./data.js");

function caclculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
}

module.exports = caclculateSum;
