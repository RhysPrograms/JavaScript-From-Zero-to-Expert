"use strict";

function logger() {
  console.log(`My name is Jonas`);
}

logger(); // Invoking/Calling/Running the function

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0); // Arguments //
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// console.log() is just a function, notice the parentheses
