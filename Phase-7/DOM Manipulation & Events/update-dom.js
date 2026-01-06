const getName = document.querySelector("#username-input");
const getButton = document.querySelector("#save-btn");
const getHeading = document.querySelector("#welcome-msg");

const storedName = localStorage.getItem("savedName");
if(storedName) {
    getHeading.textContent = `Welcome, ${storedName}`;
}

getButton.addEventListener('click', () => {
    const name = getName.value;

    localStorage.setItem("savedName", name);

    getHeading.textContent = `Welcome, ${name}`;
})
