// 1. Define the Blueprint
class User {
  // The 'constructor' runs automatically when you create a 'new' instance
  constructor(name, email) {
    this.name = name;    // 'this' refers to the specific instance being built
    this.email = email;
  }

  // Methods (No 'function' keyword needed inside classes)
  login() {
    console.log(`${this.name} has logged in.`);
  }
}

// 2. Build an Instance (The 'new' keyword is mandatory)
const user1 = new User("Alice", "alice@test.com");
const user2 = new User("Bob", "bob@test.com");

user1.login(); // "Alice has logged in."


// --- Inheritance ---

class Admin extends User {
  constructor(name, email, permissionLevel) {
    // 1. You MUST call super() before using 'this' in a child class
    super(name, email); 
    
    // 2. Now add custom Admin properties
    this.permissionLevel = permissionLevel;
  }

  deleteUser(user) {
    console.log(`Admin ${this.name} deleted ${user.name}`);
  }
}

const admin = new Admin("Charlie", "admin@test.com", "GodMode");
admin.login(); // He can Login (Inherited from User)
admin.deleteUser(user1); // He can Delete (Custom Admin method)