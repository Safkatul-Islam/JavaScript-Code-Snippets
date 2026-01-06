const userType = "admin";

switch (userType) {
    case "admin":
        console.log("Access granted: Admin");
        break;
    case "editor":
        console.log("Access granted: Editor");
        break;
    case "guest":
        console.log("Access denied");
        break;
    default:
        console.log("Unknown user type");
        break;
}

function login(username, password) {
    if (!username) return "Missing username";
    if (!password) return "Missing password";
    if (password !== "secret123") return "Wrong password";
    
    return "Login Successful";
}
console.log(login("Ryan", "Secret123"));