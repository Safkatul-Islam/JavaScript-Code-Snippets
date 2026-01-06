const inputA = "100";
const inputB = "25";
const inputC = "true";

const valA = Number(inputA);
const valB = Number(inputB);
const valC = Boolean(inputC);

console.log(valA, valB, valC);
console.log(valA + valB);

console.log(inputA + inputB); // prediction: 10025
console.log(inputA - inputB); // prediction: 75
console.log(inputA + valB); // prediction: 10025