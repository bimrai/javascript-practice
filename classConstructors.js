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
            console.log(`New balance is: £${bimAccount.balance}.`);
        } else {
            console.log("You cannot deposit a negative amount");
        }
    }

}

const bimAccount = new bankAccount("123abc", "Bim Rai")

bimAccount.deposit(100)
console.log(bimAccount)

bimAccount.deposit(50)
console.log(bimAccount)

bimAccount.deposit(-50) // testing error  
console.log(bimAccount)

console.log(`Current Account: ${bimAccount.accountHolder}`)
console.log(`Account Number: ${bimAccount.accountNumber}`)
console.log(`Current Balance: £${bimAccount.balance}`)
