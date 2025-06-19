function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function (amount) {
            if (amount <= 0) {
                return "Deposit amount must be positive.";
            }
            balance += amount;
            return balance;
        },

        withdraw: function (amount) {
            if (amount <= 0) {
                return "Withdrawal amount must be positive.";
            }
            if (amount > balance) {
                return "Insufficient funds.";
            }
            balance -= amount;
            return balance;
        },

        getBalance: function () {
            return balance;
        }
    };
}


const account = createBankAccount(100);

console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());
console.log(account.balance);        
