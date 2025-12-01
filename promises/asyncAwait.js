const base_URL = "https://pokeapi.co/api/v2/pokemon";

fetch(`${base_URL}/1`)
.then((res1) => {
    console.log("Response 1", res1);
    return fetch(`${base_URL}/2`);
})
.then((res2) => {
    console.log("Response 2", res2);
    return fetch(`${base_URL}/3`);
})
.then((res3) => {
    console.log("Response 3", res3);
    return fetch(`${base_URL}/4`);
})
.then((res4) => {
    console.log("Response 4", res4)
})
.catch((err) => {
    console.log("In the catch!", err)
});

async function firstPokemon() {
    const result = await fetch(`${base_URL}/1`)
    console.log(result)
}
