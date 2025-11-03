// additional pratcice for get and set 

class User {
    constructor(firstName, lastName, playerId) {
        this._firstName = firstName;
        this._lastName = lastName;
        this.playerId = playerId;
    }
    
    get userInfo() {
        return `Name: ${this._firstName} ${this._lastName} | Player ID: ${this.playerId}`
    }
    
    get userFirst() {
        return `First Name: ${this._firstName}`
    }
    
    get userLast() {
        return `Last Name: ${this._lastName}`
    }
    
    set firstName(fName) {
        const first = fName;
        this._firstName = first;
        return `First Name Updated To: ${this._firstName}`
    }
    
    set lastName(lName) {
        const last = lName
        this._lastName = last;
        return `Last Name Updated To: ${this._lastName}`
    }
}

const userBim = new User("Spider-Man", "Rai", 117)
console.log(userBim.userInfo)
userBim.firstName = "Bim"
console.log(userBim.userFirst)
userBim.lastName = "Parker"
console.log(userBim.userLast)
console.log(userBim.userInfo)
