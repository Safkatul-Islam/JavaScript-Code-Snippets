// Grabbing html code by Id(old school way)
const header = document.getElementById("main-heading");
// changes text inside that tag
header.textContent = "JavaScript is Alive!";

// Grabbing html code by class(.) or id(#) or tag("h1") -> (Modern way)
const paragrapgh = document.querySelector(".description");
paragrapgh.textContent = "The content has been updated.";

// Styling with CSS in JS DOM
paragrapgh.style.color = "red";
paragrapgh.style.fontSize = "18px";

// Grabbing the html code with Id -> (Modern recommended way)
const emptyDiv = document.querySelector("#container");
emptyDiv.innerHTML = "<button>Click Me</button>";

// --- Counter ---
// State
let count = 0;

// 2. Selection
const counterDisplay = document.querySelector("#counter");
const incrementBtn = document.querySelector("#btn-increment");
const decrementBtn = document.querySelector("#btn-decrement");

// 3. The render function (updates UI based on state)
function updateDisplay() {
  counterDisplay.textContent = count;

  if (count > 0) counterDisplay.style.color = "green";
  else if (count < 0) counterDisplay.style.color = "red";
  else counterDisplay.style.color = "black";
}

// 4. Event Listener (Modify state)
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay(); // Ask UI to update
});

decrementBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});