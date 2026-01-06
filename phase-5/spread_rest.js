// Spread operator -> The Expender, copies and merges arrays and objects

// Spread task(Merging)
const baseUser = { name: "Unknown", role: "guest", active: false };
const newUserInput = { name: "Alice", active: true, age: 25 };

// (Last one wins if there are duplicates)
const finalUser = {...baseUser, ...newUserInput};
console.log(finalUser);

// Spread task(Arrays) copy
const tags = ["coder", "gamer"];
const updatedTags =[...tags, "admin", "editor"];
console.log(updatedTags);

// Rest operator -> The Gatherer, cleans up arrays and objects
const { role, ...userForDB} = finalUser;
console.log(userForDB);