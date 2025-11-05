// practicing call method with the this method 

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
