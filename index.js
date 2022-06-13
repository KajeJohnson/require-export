const myObject = ({ numbers, name, hometown } = require("./data.js"));

const caclculateSum = require("./sum.js");

console.log(numbers);
console.log(`${name} is from ${hometown}`);

console.log(caclculateSum(numbers));

const cowsay = require("cowsay");

console.log(cowsay.say({ text: "Helloooooooo" }));
