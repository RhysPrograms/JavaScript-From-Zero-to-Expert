let sum = 0;

const sumAll = function (num1, num2) {
  for (let x = num1; x <= num2; x++) {
    sum += x;
  }
  return sum;
};

module.exports = sumAll;
