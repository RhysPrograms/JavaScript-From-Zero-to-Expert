function add7(number) {
  return number + 7;
}
console.log(add7(45));

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}
console.log(multiply(9, 9));

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter("rhys"));

function lastLetter(myString) {
  let stringLength = myString.length;
  return myString.charAt(stringLength - 1);
}
console.log(lastLetter("rhys"));
