const gridContainer = document.querySelector("#grid-container");
const newButton = document.querySelector("#new-button");

const containerSize = 700;
let gridLength = 16;

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("single-div");
  div.setAttribute(
    "style",
    `flex: 0 0 ${
      ((containerSize / gridLength) * 100) / containerSize
    }%; aspect-ratio: 1 / 1;`
  );

  gridContainer.appendChild(div);

  div.addEventListener("mouseover", (e) => {
    e.target.classList.add("modified-div");
  });
}

function createGrid(gridLength) {
  const totalSquares = gridLength * gridLength;
  for (i = 0; i < totalSquares; i++) {
    createDiv();
  }
}

createGrid(gridLength);

function getNewLength() {
  return Number(prompt("Enter the number of squares per side:"));
}

function removeAllDivs() {
  const allDivs = document.querySelectorAll(".single-div");
  allDivs.forEach((item) => {
    item.remove();
  });
}

newButton.addEventListener("click", () => {
  gridLength = getNewLength();
  removeAllDivs();
  createGrid(gridLength);
});
