const button = document.querySelector("#load-btn");
const list = document.querySelector("#users-container");

button.addEventListener("click", async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();

    list.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      list.append(li);
    });
  } catch (err) {
    console.error(err);
    list.innerHTML = "<li style='color: red'>Error loading data</li>";
  }
});
