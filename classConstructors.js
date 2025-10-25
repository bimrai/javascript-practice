class bankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    deposit(amt) {
        if (amt > 0) {
            this.balance += amt
            console.log(`You deposited £${amt}.`);
            console.log(`New balance is: £${this.balance}.`);
        } else {
            console.log("You cannot deposit a negative amount");
        }
    }
    
    withdraw(amt) {
        if(amt > this.balance) {
            console.log("Warning: Insufficient Funds")
        } else {
            this.balance -= amt
            console.log(`You have withdrawn £${amt} out from your account.`)
            console.log(`Your New Balance: £${this.balance}.`)
        }
    }

}

const bimAccount = new bankAccount("123abc", "Bim Rai")

// deposit test
bimAccount.deposit(100)
console.log(bimAccount)

bimAccount.deposit(50)
console.log(bimAccount)

bimAccount.deposit(-50) // testing error  
console.log(bimAccount)

// individual print test
console.log(`Current Account: ${bimAccount.accountHolder}`)
console.log(`Account Number: ${bimAccount.accountNumber}`)
console.log(`Current Balance: £${bimAccount.balance}`)

// withdraw test
bimAccount.withdraw(25)
console.log(bimAccount.balance)

const anaAccount = new bankAccount("12345", "Ana De Armas")
console.log(anaAccount)

anaAccount.deposit(1100);
anaAccount.withdraw(1200);
anaAccount.withdraw(100);

console.log(anaAccount)
