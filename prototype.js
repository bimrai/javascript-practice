// class
class Pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    
    overview() {
        return `${this.name} is an ${this.type} type.`
    }
}

const pikachu = new Pokemon("Pikachu", "Electro")
console.log(pikachu.overview()) 

// When doing say pikachu.__proto__, it will list 

// constructor function with prototypes 
// constructor function repeats the creation of these functions in respect to the number of instances.
function Pokemon(name, type) {
    this.name = name;
    this.type = type;
    this.overview =  function() {
        return `${this.name} is an ${this.type} type.`
    }
}

const pikachu = new Pokemon("Pikachu", "Electro")
console.log(pikachu.overview())

// we can do this know as prototyping

function Pokemon(name, type) {
    this.name = name;
    this.type = type;
}

Pokemon.prototype.overview = function() {
    return `${this.name} is an ${this.type} type.`
}

const pikachu = new Pokemon("Pikachu", "Electro")
console.log(pikachu.overview())
