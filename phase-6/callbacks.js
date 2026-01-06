function simulateDatabaseCall(data, callback) {
  setTimeout(() => {
    console.log(`Data Processed: ${data}`);
    callback();
  }, 2000);
}

console.log("1. Start App");
simulateDatabaseCall("User 1", () => {
  console.log("2. Data received!");
});
console.log("3. End App");

// prediction : 1 -> 3 -> 2(after 2 seconds)