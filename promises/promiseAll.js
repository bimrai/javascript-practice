// promise.all accepts an array of promises and returns a new promise
// new promise will resolve when every promise within array resolves,
// and will be rejected if any promise within the array is rejected. 
// This way ALL promises must resolve for the new created promise to resolve.

const base_URL = "https://pokeapi.co/api/v2/pokemon";

const manyFetchCalls = [
    fetch(`${base_URL}/1`),
    fetch(`${base_URL}/2`),
    fetch(`${base_URL}/3`),
    fetch(`${base_URL}/4`),
    fetch(`${base_URL}/5`) //, <- comma needed when testing 
    // fetch("http://nope.nope") <- this is just a test for catching error
];

Promise.all(manyFetchCalls).then((results) => {
    console.log("Promise.all() is all done and resolved!");
    console.log(results);
}).catch(err => {
    console.log("ONE or MORE Promise in array was rejected.", err)
});

  
