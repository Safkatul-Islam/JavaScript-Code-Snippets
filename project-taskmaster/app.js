let draggedItem = null;
let sourceColumn = null;

// Load the data
const storedData = localStorage.getItem("taskMaster");

let state = {
  todo: [],
  doing: [],
  done: [],
};

// If data exists, load it into state
if (storedData) {
  state = JSON.parse(storedData);
}

function saveToStorage() {
  localStorage.setItem("taskMaster", JSON.stringify(state));
}

const form = document.querySelector("#add-task");
const text = document.querySelector("#tasks");
const priority = document.querySelector("#priority");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // create task object
  let task = {
    id: Date.now(),
    text: text.value,
    priority: priority.value,
  };

  // add to state
  state.todo.push(task);

  // clear inputs
  text.value = "";
  priority.value = "low";

  renderTasks();

  saveToStorage();
});

function renderTasks() {
  // loop through the keys of the state or object
  Object.keys(state).forEach((column) => {
    // Column is just a variable holding the key name so state[column] is actually the array itself like state.todo or state.doing so yes it gives the array.
    const list = document.querySelector(`#${column}-list`);
    list.innerHTML = "";

    state[column].forEach((task) => {
      const div = document.createElement("div");
      div.className = "task-card";
      div.draggable = true;
      div.id = task.id;
      div.innerText = `${task.text} (Priority: ${task.priority})`;

      div.addEventListener("dragstart", () => {
        draggedItem = task;
        sourceColumn = column;
      });

      list.appendChild(div);
    });
  });
}

function setupDropZones() {
  const dropZones = document.querySelectorAll(".task-list");

  dropZones.forEach((zone) => {
    // Allow drop
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      zone.classList.add("highlight-zone");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("highlight-zone");
    });

    // handle drop
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("highlight-zone");

      if (!draggedItem) return;

      // Get target column name (remove '-list' from ID)
      const targetColumn = zone.id.replace("-list", "");

      // Don't do anything if dropped in same column
      if (targetColumn === sourceColumn) return;

      // Remove from source column
      state[sourceColumn] = state[sourceColumn].filter(
        (task) => task.id !== draggedItem.id
      );

      // Add to target colum
      state[targetColumn].push(draggedItem);

      // Reset and re-render
      draggedItem = null;
      sourceColumn = null;

      renderTasks();

      saveToStorage();
    });
  });
}

setupDropZones();

renderTasks();