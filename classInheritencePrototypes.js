class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    
    bark() {
        return `${this.name} says Woof!`
    }
    
    hungry() {
        return `${this.name} is hungry!`
    }
}

class GuideDog extends Dog {
    constructor(name, breed, owner) {
        super(name, breed);
        this.owner = owner;
    }
    alert() {
        return `${this.name} alerts ${this.owner} to known danger.`
    }
} 

const buddy = new GuideDog("Buddy", "Golden Retriever", "Bim")

console.log(buddy)
console.log(buddy.alert())
console.log(buddy.bark())
console.log(buddy.hungry())

// classes use prototypes and other things under the hood which simplifies our programming/development


// useful prototype method, Object.create
const dog = {
    howl() {
        return `Ahhoooooo!`
    }
}

const max = Object.create(dog)
console.log(max.howl())
