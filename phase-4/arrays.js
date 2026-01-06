const todoList = ["Do laundry", "Pay bills"];

todoList.push("Walk the dog");
todoList.unshift("Buy milk");
console.log(todoList);

const lastTask = todoList.pop();
const firstTask = todoList.shift();
console.log(todoList);

console.log(`Finished: ${firstTask} and ${lastTask}`);