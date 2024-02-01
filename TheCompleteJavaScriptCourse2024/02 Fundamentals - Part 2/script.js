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

const age1 = calcAge1(1991); // Or we can define them after

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

// ***************        //
// REVIEWING FUNCTIONS   //
// ***************      //

const calcAge = function (birthYearCalcAge) {
  return 2037 - birthYearCalcAge;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
  }
};

console.log(yearsUntilRetirement(1998, "Rhys"));
console.log(yearsUnhtilRetirement(1950, "Steve"));

// ************    //
// CHALLENGE #1   //
// ************  //

const calcAverage = (a, b, c) => (a + b + c) / 3;

// Alternative to an arrow function
const calcAverage = function (a, b, c) {
    return (a + b + c) / 3;
}

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// ************    //
// ARRAYS         //
// ************  //

// Even though we declare the friends variable as 'const', Arrays are not a Primitive Value, therefore we are able to mutate the value.

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yearsTest = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3
console.log(friends);
console.log(friends[friends.length - 1]); // Retrieves the last element of an Array (Peter)

// Mutating the Array
// Even though we declare the friends variable as 'const', Arrays are not a Primitive Value, therefore we are able to mutate the value. We cannot however replace the entire Array (see line 164)
friends[2] = "Jay";
console.log(friends); // Michael", "Steven", "Jay"
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "Teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.Length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// ************                        //
// ARRAY OPERATIONS (METHODS)         //
// ************                      //

// Add Elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends); // "Michael", "Steven", "Peter", "Jay"
console.log(newLength); // 4

friends.unshift("John");
console.log(friends); // "John", "Michael", "Steven", "Peter", "Jay"

// Remove Elements
friends.pop(); // Removes last Element
const popped = friends.pop();
console.log(popped); // "Peter"
console.log(friends); // "John", "Michael", "Steven", "Peter"

friends.shift(); // Removes first Element
console.log(friends);

console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1 (Doesn't Exist)

friends.push(23);
console.log(friends.includes("Steven")); // True
console.log(friends.includes("Bob")); // False
console.log(friends.includes("23")); // False
*/
// ************         //
// CHALLENGE #2        //
// ************       //
