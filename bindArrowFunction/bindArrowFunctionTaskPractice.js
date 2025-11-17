// task practice

const butters = {
    firstName: "Butters",
    lastName: "Cluckly",
    greet: function(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

const fluffy = {
    firstName: "Fluffy",
    lastName: "Meowson",
}

function greetFluffy(){
    // Invoke the greet method but instead of returning "Hello Butters Cluckly", return "Hello Fluffy Meowson". Do not modify the fluffy object above. 
    const boundFluffy = butters.greet.bind(fluffy)
    return boundFluffy()
}

console.log(greetFluffy());
