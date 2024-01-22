// Values and Variables
let country = "England";
let continent = "Europe";
let population = 70;
let language = "English";

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = true;
let variable;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var
const country = "England";
const continent = "Europe";
const isIsland = true;

// Basic Operators
console.log(population / 2);
console.log(population++);

let finlandPopulation = "6";
let averagePopulation = "33";
console.log(population > finlandPopulation);
console.log(population > averagePopulation);
const description =
  country +
  " is in" +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

// Taking Deicisons: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${33 = population} million below the average.`);
}

// Conversion and Coercion
console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
// The plus operator triggers a coercion (where the number is converted to a string)
// The minus operator triggers the opposite coercion (where the strings are converted to a number)