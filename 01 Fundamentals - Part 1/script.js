/* 
// ******************    //
// VALUES AND VARIABLES //
// ******************  //

let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName);

// Variable Name Conventions
let jonas_matilda = "JM";
let $function = 27;
let PI = 3.1415;
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

// ******************    //
// DATA TYPES           //
// ******************  //

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

console.log(typeof 23);
console.log(typeof "Rhys");

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // this will return 'Object', as opposed to 'null' and it is regarded as a Legacy Bug

// ******************    //
// LET, CONST AND VAR   //
// ******************  //

let age = 30;
age = 31;

const birthYear = 1991; // the const keyword makes an immutable variable (content cannot be changed)
birthYear = 1990;

const job; // const variables must be assigned a value when they are declared

var jobTitle = "Test Specialist"; // before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var, that is why it was necessary for new ways to declare variables

lastName = "Schmedtmann"; // Whilst this will work, do NOT write a variable without declaring it
console.log(lastName);

// ******************    //
// BASIC OPERATORS      //
// ******************  //

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 is 2 to the power of three (2 * 2 * 2)

const firstName = "Rhys";
const lastName = "Atkinson";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x += 4; // x = x * 4 = 25 * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// ******************    //
// OPERATOR PRECEDENCE  //
// ******************  //

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// ******************    //
// CHALLENGE #1         //
// ******************  //

// BMI = mass / (height * height);

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightMark * heightMark);

console.log(BMIMark, BMIJohn);
markHigherBMI = BMIMark > BMIJohn;

// ******************              //
// STRINGS AND TEMPLATE LITERALS  //
// ******************            //

const firstName = "Jonas";
const job = "Teacher";
const birthYear = "1991";
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // Back Ticks Symbol (Above the Tab Key)
console.log(jonasNew);

console.log(
  `We can also use backticks for a regular string. Some developers opt for backticks, as opposed to quotation marks due to their multi-function.`
);

console.log("This is a string with \nmultiple \nlines");
console.log(`This is a string with
multiple
lines`);

// ************************************     //
// TAKING DECISIONS: if / else Statements  //
// ************************************   //

const age = 17;

if (age >= 18) {
  console.log(`Sarah can have a driving license.`);
} else {
  // Else is optional. If there is no else statement, and the conditional outcome is false, JS will not print anything.
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 1991;
let century; // Any variable we define within a code block, will not be accessible outside of the block. We must define it outside of the block, and leave it empty.

if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}

// ******************    //
// CHALLENGE #2         //
// ******************  //

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}


// ******************              //
// TYPE CONVERSION AND COERCION   //
// ******************            //

// Type Conversion
const inputYear = "1991";

console.log(Number(inputYear)); // In reference to 'Number', this is a function

console.log(inputYear + 18); // Results in 199118
console.log(Number(inputYear) + 18); // Results in 2009
console.log(Number("Jonas")); // Results in NaN (Not a Number (Invalid Number))

console.log(String(23));

// Type Coercion
console.log("I am" + 23 + " years old"); // The plus operator triggers a coercion (where the number is converted to a string)
console.log("23" - "10" - 3); // The minus operator triggers the opposite coercion (where the strings are converted to a number)

let n = "1" + 1; // 11
n = n - 1; // 10
*/
// ******************                     //
// TRUTHY AND FALSY OPERATORS            //
// ******************                   //

// 5 Falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));

const money = 0;
if (money) {
  console.log("Don't Spend It All!"); // true
} else {
  console.log("You should get a Job!"); // false
}

let height; // height = undefined
if (height) {
  console.log("YAY! Height is defined"); // true
} else {
  console.log("Height is Undefined"); // false
}
