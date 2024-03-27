/**
- After each step, run the code to make sure your code still works! 

- If your code fails to run, or you see a "ReferenceError" in the console, review your code and make sure you have completed all of the objectives.
  
- Don't forget you can put "console.log" anywhere to see what your values are at any time.

*/

/*

  ===== Step 2: =====
  Once you understand the code snippet above, delete it. Then, using the following instructions, recreate the snippet on your own under "Your code goes here".
	
  ---------------------------------------------------------------
	
  1. Create 4 variables: firstName, lastName, thisYear, and birthYear

  2. Create a 5th variable, greeting, that is constructed from the previous 4
  (it should contain a greeting with the person's full name and their age)

  3. Print greeting with console.log

  4. Press 'Run' to ensure your code works
	
  ---------------------------------------------------------------

  ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1948
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 17 years old."

*/

//===== Your code goes here =================

firstName = "Rhys";
lastName = "Atkinson";
thisYear = 2024;
birthYear = 1998;

greeting = `Hello! My name is ${firstName} ${lastName} and I am ${
  thisYear - birthYear
} years old.`;
