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
