// Retrieving the reference to the Container
const container = document.getElementById("container");

const numGridElements = 24;
let isDrawing = false;

for (let i = 0; i < numGridElements; i++) {
  // Creating the gridSquare element
  const gridSquare = document.createElement("div");
  // Appending 'gridSquare' to its parent element 'container'
  container.appendChild(gridSquare);
  // Adding CSS
  gridSquare.classList.add("gridSquare");
  gridSquare.style.cssText = "border: 1px solid #ccc; flex: 1 0 25%;";
  // Add event listener for mouseover
  gridSquare.addEventListener("mouseover", () => draw(gridSquare));
}

// Function to handle drawing
function draw(square) {
  square.style.backgroundColor = "black";
}

// Event listener for mouseover to control drawing
document.addEventListener("mouseover", () => (isDrawing = true));
