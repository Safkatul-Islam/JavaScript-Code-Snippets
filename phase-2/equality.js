console.log(10 == "10");
console.log(10 === "10");

const objA = { id: 1 };
const objB = { id: 1 };
console.log(objA === objB); // prediction: false because different memory address for both objects

const objC = objA;
console.log(objA === objC); // prediction: true because both pointing to the same address

const val1 = NaN;
const val2 = NaN;
console.log(val1 === val2);
console.log(Object.is(val1, val2));