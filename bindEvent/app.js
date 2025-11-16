const spiderMan = {
    name: "Spider-Man",
    city: "NYC",
    phrase: function() {
        return `I'm your friendly neighbourhood ${this.name}. I fight crime in ${this.city}.`,
        console.log(`I'm your friendly neighbourhood ${this.name}. I fight crime in ${this.city}.`) //logging in browser test
    }
}

// The method below also works. It was my initial attempt before completing the lecture but we are focused on bind method

// const heroSpiderMan = spiderMan.phrase()

// const btn = document.querySelector("#clickMe");
// btn.addEventListener("click", function() {
//     console.log(heroSpiderMan)
// })

// bind method:

const btn = document.querySelector("#clickMe");
btn.addEventListener("click", spiderMan.phrase.bind(spiderMan));