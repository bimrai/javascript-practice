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


// this will throw err

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
    return fetch(`http://nope.nope`); // this causes the error
})
.then((res4) => {
    console.log("Response 4", res4)
})
.catch((err) => {
    console.log("In the catch!", err) // this error works amongst all the promises and no need to repeat catch for each .then
});
