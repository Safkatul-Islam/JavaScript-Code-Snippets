// Set - unique elements only
const allVisitors = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
const uniqueVisitors = [...new Set(allVisitors)];
console.log(uniqueVisitors);

// Map - [key, value]
const visitorLog = new Map();
for (const uniqueVisitor of uniqueVisitors) {
    visitorLog.set(uniqueVisitor, "Accessed at 10:00 AM");
}

console.log(visitorLog.get("Charlie"));

// Custom errors throw
function enterGym(visitorName) {
    if (!visitorLog.has(visitorName)) {
        throw new Error("Access Denied: Visitor not registered");
    }

    return "Welcome, " + visitorName;
}

try {
    console.log(enterGym("Alice"));
    console.log(enterGym("David"));
} catch (error) {
    console.error(error.message);
}