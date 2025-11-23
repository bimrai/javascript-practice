const grandParent = {
    sing() {
        return `LA LA LA`
    }
}

const parent = {
    color: "Red",
    greet() {
        return `Hello!`
    },
    __proto__: grandParent
}

console.log(parent.sing()) // outputs la la la from sing function within grandParent

const child = {
    num: 1,
    __proto__: parent,
}

console.log(child.color) // outputs red as it has access to parent red via __proto__
console.log(child.greet()) // outputs hello pulled from parent
console.log(child.sing()) //outputs la la la pulled from parent, where parent pulls from grandparent
