const repeatString = function (word, itr) {
  let string = "";
  for (let i = 0; i < itr; i++) {
    string += word; // The += operator performs addition on the two operands and assigns the result to the left operand.
  }
  return string; // if this was located within the for loop, we would be given one answer (hey). The first return immediately stops the execution of the function.
};

module.exports = repeatString;
