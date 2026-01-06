const myApp = {
    appName: "My Coder",
    version: 0.1,
    isDevelopment: true,
    stack: {
        frontend: "Next.js",
        backend: "Express",
        database: "MongoDB"
    }
};

console.log(myApp);
console.log(myApp.appName);
console.log(myApp.stack.database);

myApp.version = 0.2;
myApp.currentUser = null;

console.log(myApp);