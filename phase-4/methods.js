const products = [
  { id: 1, name: "Laptop", price: 1000, category: "Tech" },
  { id: 2, name: "Book", price: 20, category: "Education" },
  { id: 3, name: "Phone", price: 500, category: "Tech" },
  { id: 4, name: "Pen", price: 2, category: "Education" },
];

// Map -> tranform values
const productNames = products.map((product) => product.name);
console.log(productNames);

// Filter -> filters the array based on condition
const techProducts = products.filter((product) => product.category === "Tech");
console.log(techProducts);

// Reduce -> squashes the entire array into a single value
const totalPrice = products.reduce((currentTotal, product) => {
  return currentTotal + product.price;
}, 0);
console.log(totalPrice);