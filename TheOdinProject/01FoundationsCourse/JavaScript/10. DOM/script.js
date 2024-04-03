const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listSpan = document.createElement("span");
  const listButton = document.createElement("button");

  listItem.appendChild(listSpan);
  listSpan.textContent = myItem;
  listItem.appendChild(listButton);
  listButton.textContent = "Delete";
  list.appendChild(listItem);

  listButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
