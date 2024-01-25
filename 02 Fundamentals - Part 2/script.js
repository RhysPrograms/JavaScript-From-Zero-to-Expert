"use strict";

// ******************                    //
// FUNCTIONS   //
// ******************                  //

/*
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
*/

// ******************                       //
// FUNCTION DECLARATIONS vs. EXPRESSIONS   //
// ******************                     //

// Function Declaration
// const age1 = calcAge1(1991); // We CAN call function declarations prior to them being defined
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991); // We CAN call function declarations prior to them being defined

// Function Expression (Function without a name, or an Anonymous Function)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
