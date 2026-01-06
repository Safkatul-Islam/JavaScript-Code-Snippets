// for...of
const prices = [10, 20, 30, 40, 50];
let total = 0;
for (const price of prices) {
  if (price === 30) continue;

  total += price;
}
console.log(total);

// for...in
const book = { title: "1984", author: "Orwell", year: 1949 };
for (const key in book) {
  console.log(`Key: ${key}, value: ${book[key]}`);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}
