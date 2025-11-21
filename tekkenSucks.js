// well... lets check if Tekken 8 sucks

const tekkenSucks = true;

if (tekkenSucks == true) {
    console.log("Tekken sucks...")
} else {
    "Tekken still sucks."
}

// constructor function

function BadGames(game) {
    this.game = game;
}

const tekken = new BadGames("Tekken");
console.log(tekken);

// class version 

class BadGames {
    constructor(game, rating) {
        this.game = game;
        this.rating = rating;
    }
    
    review() {
        return `Game: ${this.game} | Rating: ${this.rating}`
    }
}

// one way to access
const tekken = new BadGames("Tekken", 2)
console.log(tekken.review())

// another way to access, both output same thing
const tekkenReview = tekken.review()
console.log(tekkenReview)

