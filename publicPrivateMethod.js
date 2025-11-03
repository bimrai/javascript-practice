// Practicing my understanding of public/private class methods and how or what is accessed depending on technique, and what cannot be accessed at all

class Private {
    #privateMethod() {
        console.log("PRIVATE METHOD CALLED SUCCESSFULLY!")
    }
    
    // public method used to call private method
    publicMethod() {
        this.#privateMethod();
        return `This publicMethod() allows it to access the private method by using a publicMethod linked to it using "this." method.`
    }
    
    #notAccessible() {
        return "I will never run"
    }
    
    purePublic() {
        return "I am publicly accessible from external use unlike the private."
    }
}

const callPrivate = new Private();
console.log(callPrivate.publicMethod())

// console.log(#privateMethod()) <-- Does not call as it is private

console.log(callPrivate.purePublic())

// console.log(callPrivate.#notAccessible()) <-- This consolelog will never output anything
