let heading = document.querySelector("#main-heading");

heading.addEventListener("click", () => {
  console.log("You clicked on the Heading, element!");
});

// 8.1
let content = document.querySelector("#main-content");
content.addEventListener("click", () => {
  console.log("Joey doesn't share food!");
});

document.querySelector("em").addEventListener("click", () => {
  console.log("You clicked on the em, element!");
});

document.querySelector("body").addEventListener("click", () => {
  console.log("You clicked on the body, element!");
});

let wordList = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordList.addEventListener("click", (event) => {
  let word = target.textContent;
  sentence.textContent += word;
  sentence.textContent += " ";
});