function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance += amount;
            return `Deposited: ${amount}. New Balance: ${balance}`;
        },
        withdraw: (amount) => {
            if(balance >= amount) {
                balance -= amount;
                return `Withdrew: ${amount} New Balance: ${balance}`;
            }
            return "Insufficient funds";
        }

    }
}

const myAccount = createBankAccount(100);
console.log(myAccount.balance);
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(20));
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(1000));

const otherAccount = createBankAccount(0);
console.log(otherAccount.balance);
console.log(otherAccount.deposit(50));
console.log(otherAccount.withdraw(20));