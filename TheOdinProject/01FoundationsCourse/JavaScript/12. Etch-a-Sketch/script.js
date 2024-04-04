// Retrieving the reference to the Container
const container = document.getElementById("container");

const numGridElements = 16;

for (let i = 0; i < numGridElements; i++) {
  // Creating the gridSquare, element
  const gridSquare = document.createElement("div");
  // Appending 'gridSquare' to it's parent element 'container'
  container.appendChild(gridSquare);
  // Adding CSS
  gridSquare.classList.add("gridSquare");
  gridSquare.style.cssText = "border: 1px solid #ccc; flex: 1 0 25%;";
}
