// practicing call method with the this method 
// -----------------------------------------------------------------------------------------------
//                                         Practice 1
// -----------------------------------------------------------------------------------------------

class Gamer {
    constructor(firstName) {
        this.firstName = firstName;
    }
    
    intro(faveGame = "Halo") {
        console.log("FROM: ", this)
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
        console.log("FROM: ", this)
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
        console.log("FROM: ", this)
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

// -----------------------------------------------------------------------------------------------
//                                         Practice 3
// -----------------------------------------------------------------------------------------------

const soldier = {
    phrase: function() {
        return `I'm ${this.rank} ${this.name}. State your name and rank!`
    },
    report: function() {
        return `${this.rank} ${this.name} sir!`
    },
    dismiss: function() {
        return `You are all dismissed!`
    }
}

const cptLarkey = {
    name: "Larkey",
    rank: "Captain",
}

const pvtGurung = {
    name: "Gurung",
    rank: "Private"
}

const pvtRai = {
    name: "Rai",
    rank: "Private"
}

const ssgtSahan = {
    name: "Sahan",
    rank: "Staff Sergeant"
}

console.log(soldier.phrase.call(cptLarkey))
console.log(soldier.report.call(ssgtSahan))
console.log(soldier.report.call(pvtGurung))
console.log(soldier.report.call(pvtRai))
console.log(soldier.dismiss())

// -----------------------------------------------------------------------------------------------
//                                         Practice n
// -----------------------------------------------------------------------------------------------
