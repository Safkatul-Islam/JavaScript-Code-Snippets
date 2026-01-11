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
  // clear all three tasks
  document.querySelector("#todo-list").innerHTML = "";
  document.querySelector("#doing-list").innerHTML = "";
  document.querySelector("#done-list").innerHTML = "";

  // render todo task
  state.todo.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";
    div.draggable = true;
    div.id = task.id;
    div.innerText = `${task.text} (priority: ${task.priority})`;

    document.querySelector("#todo-list").appendChild(div);
  });

  // render doing task
  state.doing.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";
    div.draggable = true;
    div.id = task.id;
    div.innerText = `${task.text} (priority: ${task.priority})`;

    document.querySelector("#doing-list").appendChild(div);
  });

  // render done task
  state.done.forEach((task) => {
    const div = document.createElement("div");
    div.className = "task-card";
    div.draggable = true;
    div.id = task.id;
    div.innerText = `${task.text} (priority: ${task.priority})`;

    document.querySelector("#done-list").appendChild(div);
  });
}
