"use strict";
/*
function describeCountry(country, population, capitalCity) {
  const choice = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return choice;
}

const countryEngland = describeCountry("England", 57, "London");
const countrySpain = describeCountry("Spain", 48, "Madrid");
const countryPortugal = describeCountry("Portugal", 10, "Lisbon");

console.log(describeCountry("USA", 334, "Washington, D.C"));
console.log(describeCountry("Russia", 147, "Moscow"));
console.log(describeCountry("China", 1409, "Beijing"));
*/

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
