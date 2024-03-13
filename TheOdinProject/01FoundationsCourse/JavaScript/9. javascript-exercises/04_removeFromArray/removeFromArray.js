const removeFromArray = function (passedArray, ...args) {
  const newArray = [];

  passedArray.forEach((items) => {
    if (!args.includes(items)) {
      newArray.push(items);
    }
  });
  return newArray;
};

// Use splice as opposed to pop as we can specify a position

// Do not edit below this line
module.exports = removeFromArray;
