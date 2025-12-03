// similar to promise.all, except for promise.allSettled(), promise resolves after
// all given promises have either been fulfilled or rejected, we then get back our results
// or data wrapped around in an object that each describes the outcome of each promise.

async function allSettledPractice() {

    const GITHUB_BASE_URL = "https://api.github.com";

    let bimR = fetch(`${GITHUB_BASE_URL}/users/bimrai`);

    let latifT = fetch(`${GITHUB_BASE_URL}/users/latiftrincas`);

    let badURL = fetch("https://nope.nope");

    let results = await Promise.allSettled([
        bimR, 
        latifT,
        badURL
    ]);

    console.log(results)
    const fulfilled = results.filter(r => r.status === 'fulfilled');
    const rejected = results.filter(r => r.status === 'rejected');
    console.log(fulfilled);
    console.log(rejected);
}

allSettledPractice() // calls

// once calls, returns something like this:
(3) [{…}, {…}, {…}]
0
: 
{status: 'fulfilled', value: Response}
1
: 
{status: 'fulfilled', value: Response}
2
: 
{status: 'rejected', reason: TypeError: Failed to fetch at allSettledPractice (<anonymous>:9:18) at <anonymous>:1:1}
length
: 
3
[[Prototype]]
: 
Array(0)

// As you can see the first 2 are valid github accounts where as badURL was "https://nope.nope", not a valid URL or api details, hence reject. 

// this part here should log on console with separate fulfilled and rejected array objects 
const fulfilled = results.filter(r => r.status === 'fulfilled');
const rejected = results.filter(r => r.status === 'rejected');
console.log(fulfilled);
console.log(rejected);

// output should look like:
(3) [{...}, {...}, {...}] // this one should showcase all fulfilled and rejected
(2) [{...}, {...}] // this one should showcase only the two valid github user accounts for bimR and latifT filtered out
[{...}] // the final one is the only rejected filtered out one via badURL "https://nope.nope" as mentioned earlier
