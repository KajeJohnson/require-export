//npm init to start

const myObject = {
  numbers: [1, 3, 5, 7, 8, 4, 2],
  name: "KJ",
  hometown: "Westland, MI",
};

//you can also do it this way
//const numbers = [1,2,3,4];
//const name = "KJ";
//const hometown: "westland";

const { numbers, name, hometown } = myObject;

module.exports = { numbers, name, hometown };
