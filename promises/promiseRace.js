const base_URL = "https://pokeapi.co/api/v2/pokemon";

const manyFetchCalls = [
    fetch(`${base_URL}/1`),
    fetch(`${base_URL}/2`),
    fetch(`${base_URL}/3`),
    fetch(`${base_URL}/4`),
    fetch(`${base_URL}/5`) //, <- comma needed when testing 
    // fetch("http://nope.nope") <- this is just a test for catching error
];

// race essentially handles the first fulfilled or rejected response
// other fetches still run in the background, but race ignores their results
Promise.race(manyFetchCalls).then(winner => {
    console.log(winner)
}).catch((err) => console.log(err))
