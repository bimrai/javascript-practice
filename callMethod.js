// practicing call method with the this method 
// -----------------------------------------------------------------------------------------------
//                                         Practice 1
// -----------------------------------------------------------------------------------------------

class Gamer {
    constructor(firstName) {
        this.firstName = firstName;
    }
    
    intro(faveGame = "Halo") {
        return `Hi my name is ${this.firstName} and my favourite game is ${faveGame}!`
    }
}

const samGrg = new Gamer("Samon")
console.log(samGrg.intro())

const samIntro = samGrg.intro
console.log(samIntro.call(samGrg, "My Little Pony"))

// -----------------------------------------------------------------------------------------------
//                                         Practice 2
// -----------------------------------------------------------------------------------------------

class Gamer {
    constructor(firstName) {
        this.firstName = firstName;
    }
    
    intro(faveGame = "Halo") {
        return `Hi my name is ${this.firstName} and my favourite game is ${faveGame}!`
    }
}

const samGrg = new Gamer("Samon")
console.log(samGrg.intro())

const samIntro = samGrg.intro
console.log(samIntro.call(samGrg, "My Little Pony"))


const sam = {
    name: "Sam",
    city: "Village Hidden in the Sound",
    platform: "PC and PS5",
    game: function () {
        return `I am ${this.name} and I game on ${this.platform}`
    } 
}

const bim = {
    name: "Bim",
    city: "Hidden Leaf Village",
    platform: "PC"
}

console.log(sam.game(sam))
console.log(sam.game.call(bim))
