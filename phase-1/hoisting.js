// --- Challenge Code ---

// 1. Predict this output:
console.log(greeting);
var greeting = "Hello World!";
// Prediction: undefined


// 2. Predict this output:
console.log(globalName);
let globalName = "Sarah";
// Prediction: Reference Error


// 3. Predict this output:
// (Feel free to uncomment the console.log line to test)
function testHoisting() {
  // console.log(age); 
  let age = 30;
}
testHoisting();
// Prediction: ReferenceType Error


// 4. Predict this output:
console.log(pet);
var pet = { name: "Fluffy" };
// Prediction: undefined


// 5. Predict this output:
sayGoodbye();

function sayGoodbye() {
  console.log("Goodbye!");
}
// Prediction: Will print goodbye in the console


// 6. Predict this output:
// (Feel free to uncomment the call line to test)
// sayGoodnight(); 

const sayGoodnight = function() {
  console.log("Goodnight!");
};
// Prediction: ReferenceType error cz const stays in TDZ