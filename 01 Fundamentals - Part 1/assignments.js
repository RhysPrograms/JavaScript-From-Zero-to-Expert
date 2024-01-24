/*
// ******************       //
// VALUES AND VARIABLES    //
// *******************    //

let country = "England";
let continent = "Europe";
let population = 70;
let language = "English";

console.log(country);
console.log(continent);
console.log(population);

// ******************    //
// DATA TYPES    //
// ******************* //

let isIsland = true;
let variable;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ******************      //
// LET, CONST, AND VAR    //
// *******************   //

const country = "England";
const continent = "Europe";
const isIsland = true;

// ******************    //
// BASIC OPERATORS      //
// ******************* //

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

// ******************                //
// STRINGS AND TEMPLATE LITERALS    //
// *******************             //

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

// ******************                         //
// TAKING DECISIONS: IF / ELSE STATEMENTS    //
// *******************                      //

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(`${country}'s population is ${33 = population} million below the average.`);
}

// ******************          //
// CONVERSION AND COERCION    //
// *******************       //

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); // 617
console.log('19' - '13' + 17); // 23
console.log('123' < 57); // false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
// The plus operator triggers a coercion (where the number is converted to a string)
// The minus operator triggers the opposite coercion (where the strings are converted to a number)

// ******************               //
// EQUALITY OPERATORS: == vs. ===  //
// *******************            //

// As we are using the === operator, we must convert our inputted string into a number via the function (Number)
const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}

// ******************     //
// LOGICAL OPERATORS     //
// *******************  //

if (speakingLanguage === "English" && population < 50 && !isIsland) {
  console.log("You should live in England");
} else {
  console.log("You should live elsewehre");
}


// ******************        //
// The switch statement     //
// *******************     //

let language;
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd Place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too 😊");
}
*/

// ******************                      //
// The Conditional (Ternary) Operator     //
// *******************                   //

let country = "England's";
let population = "70";

console.log(
  `${country} ${
    population > 33
      ? "population is above average"
      : "population is below average"
  }`
);
