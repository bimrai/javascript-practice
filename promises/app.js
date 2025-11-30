const base_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${base_URL}/1`;

// normal function
fetch(url)
.then(function (data) {
    console.log(data);
})
.catch(function(err) {
    console.log("Err!", err)
})

// arrow function 
fetch(url)
    .then((res) => console.log(res))
    .catch((err) => console.log("Err!", err));


fetch(`${base_URL}/1`)
    .then((res1) => console.log("Response 1", res1))
    .catch((err) => console.log("Error!", err));



// for pokemon, flattening chain code or callback hell
    
fetch(`${base_URL}/1`)
    .then((res1) => {
        console.log("Response 1", res1);
        fetch(`${base_URL}/2`)
        .then(res2 => {
            console.log("Response 2", res2)
            fetch(`${base_URL}/3`)
            .then(res3 => {
                console.log("Response 3", res3)
                .then(res4 => {
                    console.log("Response 4", res4)
                })
                .catch((err) => console.log("Error!", err));
            })
            .catch((err) => console.log("Error!", err));
        })
        .catch((err) => console.log("Error!", err));
    })
    .catch((err) => console.log("Error!", err));


// fix for this is promise chaining

fetch(`${base_URL}/1`).then((res1) => {
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
});