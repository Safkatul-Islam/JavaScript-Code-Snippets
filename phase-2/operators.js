const currentNumber = 15;

// Module task
if (currentNumber % 2 === 0) console.log("even");
else console.log ("odd");
const remainder = currentNumber % 2;
console.log(remainder)

// Logical task
const isLoggedIn = true;
const hasPermission = false;

const canAccess = (isLoggedIn && hasPermission);
const canViewPreview = (isLoggedIn || hasPermission);
console.log(canAccess, canViewPreview)

// Ternary task
const userRole = "guest";
const accessLevel = userRole === "admin" ? "Full Access" : "Restricted Access";
console.log(accessLevel)