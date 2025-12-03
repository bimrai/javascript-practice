// promises method:
const base_URL = "https://pokeapi.co/api/v2/pokemon";

const results = [];
fetch(`${base_URL}/1`).then((res) => {
    results.push(res);
    console.log("Request 1 finished");
});
fetch(`${base_URL}/2`).then((res) => {
    results.push(res);
    console.log("Request 2 finished");
});
fetch(`${base_URL}/3`).then((res) => {
    results.push(res);
    console.log("Request 3 finished");
});

console.log("Fetching...")


// async/await method:
const base_URL = "https://pokeapi.co/api/v2/pokemon";

const results = [];

async function getPokemon1() {
    const res = await fetch(`${base_URL}/1`);
    results.push(res);
    console.log("REQUEST 1 COMPLETE.");
}

async function getPokemon2() {
    const res = await fetch(`${base_URL}/2`)
    results.push(res);
    console.log("REQUEST 2 COMPLETE.");
}

async function getPokemon3() {
    const res = await fetch(`${base_URL}/3`);
    results.push(res);
    console.log("REQUEST 3 COMPLETE.");
}

getPokemon1()
getPokemon2()
getPokemon3()

console.log("Fetching...")



// async/await chosen number search
const base_URL = "https://pokeapi.co/api/v2/pokemon";

const results = [];

async function getPokemon(num) {
    const res = await fetch(`${base_URL}/${num}`);
    results.push(res);
    console.log("POKEMON REQUEST COMPLETE.");
}

getPokemon(5) // 5 as example
getPokemon(7) // 7 as example too, showing you can pull any number and if valid will return

console.log("Fetching...")
