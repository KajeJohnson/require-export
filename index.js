//put cowsay up here
const cowsay = require("cowsay");
const _ = require("lodash");

const { numbers, name, hometown } = require("./data.js");

//OR with destructure
//const {numbers, name, hometown} = require('./data.js);

const caclculateSum = require("./sum.js");

console.log(numbers);
console.log(`${name} is from ${hometown}`);

console.log(caclculateSum(numbers));
//OR
//const sum = caclculateSum(numbers);
//console.log(sum);

console.log(cowsay.say({ text: "Helloooooooo" }));

//OR
//console.log(cowsay.say({
//text:"Jeeellooo"
//}))

console.log(_.shuffle(numbers));
