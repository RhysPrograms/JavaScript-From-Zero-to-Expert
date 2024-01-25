"use strict";

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
