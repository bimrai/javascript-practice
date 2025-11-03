// get and set practice within class

class User {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    
    get fullName() {
        return `Full Name: ${this.fName} ${this.lName}`
    }
    
    get firstName() {   
        return `First Name: ${this.fName}`
    }
    
    get lastName() {
        return `Last Name: ${this.lName}`
    }
    
    set firstName(newFirst) {
        const first = newFirst
        this.fName = first;
        return `${this.lName}`
    }
    
    set lastName(newLast) {
        const last = newLast
        this.lName = last
        return `${this.lName}`
    }
    
    set fullName(newFirst) {
        const [first, last] = newFirst.split(" ");
        this.fName = first;
        this.lName = last;
    }
}

const bimRai = new User("Bim", "Parker")
console.log(bimRai.firstName)
console.log(bimRai.lastName)
console.log(bimRai.fullName)
bimRai.lastName = "Rai"
console.log(bimRai.fullName)
