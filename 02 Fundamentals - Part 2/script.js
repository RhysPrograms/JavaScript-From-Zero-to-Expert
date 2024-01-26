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
const appleJuice = fruitProcessor(5, 0); // Arguments
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// console.log() is just a function, notice the parentheses

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

// ***************   //
// ARROW FUNCTION   //
// *************** //

// Function keyword is not required
// The below is example where we only require one parameter
const calcAge3 = (birthYear) => 2037 - birthYear; // Return happens implcitly (we don't have to write the 'return' keyword for a one line function)
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntlRetirement(1991, "Rhys"));
console.log(yearsUntlRetirement(1980, "Bob"));
*/

// ***************                      //
// FUNCTIONS CALLING OTHER FUNCTIONS   //
// ***************                    //

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
