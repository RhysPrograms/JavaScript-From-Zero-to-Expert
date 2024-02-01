"use strict";

// ****************    //
// FUNCTIONS          //
// ****************  //

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


// ******************                       //
// FUNCTION DECLARATIONS vs. EXPRESSIONS   //
// ******************                     //

// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const england = percentageOfWorld1(57);
const spain = percentageOfWorld1(48);
const portugal = percentageOfWorld1(10);

console.log(
  `The population of England is ${england}, the population of Spain is ${spain}, and the population of Portugal is ${portugal}.`
);

// Function Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const usa = percentageOfWorld2(334);
const russia = percentageOfWorld2(147);
const china = percentageOfWorld2(1409);

console.log(
  `"The population of the US is ${usa}, the population of Russia is ${russia}, and the population of China is ${china}.`
);


// ****************    //
// ARROW FUNCTIONS    //
// ****************  //

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const englandPop = percentageOfWorld3(57);
console.log(`The population of England is ${englandPop}.`);


// **********************                //
// FUNCTIONS CALLING OTHER FUNCTIONS    //
// **********************              //

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world's population.`;
  return description;
}

console.log(describePopulation("England", 57));
console.log(describePopulation("USA", 334));
console.log(describePopulation("Russia", 147));
*/
// **********************    //
// INTRODUCTION TO ARRAYS   //
// **********************  //

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populations = [57, 334, 147, 10];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
