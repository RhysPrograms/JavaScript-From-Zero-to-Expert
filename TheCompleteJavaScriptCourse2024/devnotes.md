## 3 DIFFERENT FUNCTION TYPES

### Function Declaration

- Function that can be used before it's declared

function calcAge(birthYear) {
return 2037 - birthYear;
}

### Function Expression

- Essentially a function value stotred in a variable

const calcAge = function (birthYear) {
return 2037 - birthYear;
}

### Arrow Function

- Great for a quick one-line function. Has no this keyword.

const calcAge = birthYear => 2037 - birthYear;
