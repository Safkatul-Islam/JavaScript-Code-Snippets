const account = {
    owner: "Daniel",
    balance: 0,
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited amount: ${amount}`);
        console.log(`New Balance: ${this.balance}`);
    },
    withdraw(amount) {
        this.balance -= amount;
        console.log(`Withdrawal amount: ${amount}`);
        console.log(`New Balance: ${this.balance}`);
    },
    getSummary() {
        console.log(`${this.owner} has ${this.balance} in the bank`);
    },
    logOwnerArrow: () => {
        console.log(this.owner);
    }
};

account.deposit(100);
account.withdraw(30);
account.getSummary();
account.logOwnerArrow();