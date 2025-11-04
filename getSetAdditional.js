// additional coding problem solving task practice

class UserProfile {
    constructor(username, email, birthdate) {
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
    }
    
    get username() {
        return this._username
    }
    
    set username(value) { 
        if (typeof value !== "string" || value.trim().length === 0) {
            throw new Error("Invalid username.");   
        }
        this._username = value;
    }
    
    get email() {
        return this._email
    }
    
    set email(value) {
        if(typeof value !== "string" || !value.includes("@")) {
            throw new Error("Invalid email.");
        }
        this._email = value;
    }
    
    get birthdate() {
        return this._birthdate
    }
    
    set birthdate(date) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if(!dateRegex.test(date) || isNaN(Date.parse(date))) {
            throw new Error("Invalid birthdate.");
        }
        this._birthdate = date;
    }
}
