// 7.3
let mainHeading = document.querySelectorAll("#main-heading strong");
mainHeading[0].textContent = "Is this just Fantasy?";

// 7.4
let getElement = document.getElementById("main-heading");
let querySelector = document.querySelectorAll("#main-heading");
console.log(getElement, querySelector);
console.log(getElement === querySelector);

// 7.5
document.querySelectorAll("strong");
document.querySelectorAll("p.highlight strong");

// 7.6
document.querySelector("p em").innerText = "Yes, this is italicized";
