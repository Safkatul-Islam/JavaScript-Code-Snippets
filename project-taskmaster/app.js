let draggedItem = null;

let state = {
  todo: [],
  doing: [],
  done: [],
};

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
});

function renderTasks() {
  
    // loop through the keys of the state or object
    Object.keys(state).forEach((column) => {        // Column is just a variable holding the key name so state[column] is actually the array itself like state.todo or state.doing so yes it gives the array.
        const list = document.querySelector(`#${column}-list`);
        list.innerHTML = "";

        state[column].forEach((task) => {
            const div = document.createElement('div');
            div.className = "task-card";
            div.draggable = true;
            div.id = task.id;
            div.innerText= `${task.text} (Priority: ${task.priority})`;

            list.appendChild(div);
        });
    });
}
