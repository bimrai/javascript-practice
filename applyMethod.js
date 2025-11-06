// apply is an array like object
// however apply has been replace by removing apply to just using "..." followed by the argument
// old school -> apply, modern js -> ...

const nums = [3, 35, 34, 36, 856, 6, 457, 64, 214, 3166, 8747, 9999] 

console.log(Math.max(...nums))
console.log(Math.max.apply(null, nums))

function sum() {
    console.log(arguments);
}

sum(2, 4, 6, 8)

console.log("------------------------------------------------")

function max() {
    console.log("Old School")
    console.log(arguments);
    Math.max.apply(null, arguments);
    console.log("Modern JS School")
    console.log(arguments);
    Math.max(...arguments);
    console.log("Both work the same!")
}

function maxOld() {
    console.log("Modern JS School")
    console.log(arguments);
    Math.max.apply(null, arguments);
}

function maxNew() {
    console.log("Modern JS School")
    console.log(arguments);
    Math.max(...arguments);
}

max(5, 10, 15, 20)
console.log("------------------------------------------------")
maxOld(1, 2, 3, 4)
maxNew(5, 6, 7, 8)

// ------------------------------------------------------------------------------------
//                                   Practice 2
// ------------------------------------------------------------------------------------


const walle = {
    firstName: "Wall E",
    greet: function (phrase, tone) {
        console.log(`${this.firstName} says: "${phrase}" (in a ${tone} tone).`);
    }
}

const eve = {
    firstName: "Eve",
};

walle.greet.call(eve, "Wall E","robotic Wall E")
console.log("Apply and call can work in similar ways. However call is straight forward, apply is an array based method.")
walle.greet.apply(eve, ["Wall E","robotic Wall E"])
