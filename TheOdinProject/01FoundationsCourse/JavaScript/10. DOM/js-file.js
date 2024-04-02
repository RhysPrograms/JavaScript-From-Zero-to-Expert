// Creating a Paragraph, with red text content
const redContent = document.createElement("p");
redContent.classList.add("redContent");

document.querySelector("redContent");
redContent.textContent = "Hey I'm red!";
redContent.style.color = "red";

document.getElementById("container").appendChild(redContent);

// Creating a Header, with blue text content
const blueContent = document.createElement("h3");
blueContent.classList.add("blueContent");
blueContent.textContent = "Hey I'm blue!";
blueContent.style.color = "blue";

document.getElementById("container").appendChild(blueContent);

// Creating child elements within a parent container
const otherContainer = document.createElement("div");
const container = document.getElementById("container");
otherContainer.classList.add("otherContainer");
otherContainer.setAttribute("style", "border-style: solid; background: pink;");

const divH1 = document.createElement("h1");
divH1.classList.add("divH1");
divH1.textContent = "I'm in a div!";

const divP = document.createElement("p");
divP.classList.add("divP");
divP.textContent = "Me too!";

otherContainer.appendChild(divH1);
otherContainer.appendChild(divP);

container.appendChild(otherContainer);

// Listening for a Click
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

// Logging more about the Click, via the Event parameter
btn.addEventListener("click", function (e) {
  console.log(e);
});
