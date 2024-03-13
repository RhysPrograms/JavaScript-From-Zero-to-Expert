const removeFromArray = function (passedArray, ...args) {
  const newArray = [];

  passedArray.forEach((items) => {
    if (!args.includes(items)) {
      newArray.push(items);
    }
  });
  return newArray;
};

function removeElementsFromArray(arr, ...args) {
  for (const arg of args) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arg) {
        arr.splice(i, 1);
        i--; // Decrement i to stay at the current index after removal
      }
    }
  }
  return arr;
}
removeElementsFromArray(myArray, 2, 4, 6);

// Do not edit below this line
module.exports = removeFromArray;
