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

// using async/await does the same work as the promise chain above,
// but with cleaner and more readable syntax.
// each "await" pauses the function until that fetch resolves,
// so the next line only runs after the previous request finishes.
// they both do same thing, makes 4 api calls

async function getFourPokemons() {
    const res1 = await fetch(`${base_URL}/1`)
    console.log(res1)
    
    const res2 = await fetch(`${base_URL}/2`)
    console.log(res2)
    
    const res3 = await fetch(`${base_URL}/3`)
    console.log(res3)
    
    const res4 = await fetch(`${base_URL}/4`)
    console.log(res4)
}

