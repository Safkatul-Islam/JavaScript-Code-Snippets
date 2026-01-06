/* Classic traditinal old function
function calculateArea(width, height) {
    return width * height;
}*/

// Modern standard Arrow function ES6
const calculateArea = (width, height) => width * height;
console.log(calculateArea(2.4, 6.4));

const registerUser = (username = "bot") => `${username} is registered`;
console.log(registerUser());
console.log(registerUser("James"));

const double = (n) => n * 2;
console.log(double(10));