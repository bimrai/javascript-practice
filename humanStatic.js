// practicing static and static methods in class, understand it but gets confusing too

class Human {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    
    static registerList() {
        const names = [
            "John",
            "Jack",
            "Mike",
            "Emily",
            "Sarah",
            "Lee",
            "Millie",
            "Molly",
            "Victoria",
            "Miguel",
            "Peter",
            "Henderson"
        ];
        
        const ages = [
            41, 25, 42, 19, 63, 25, 26, 32, 47, 57, 58, 35
        ];
        
        const humans = scan(names, ages)
        return humans
        
    }
}

function scan(names, age) {
    
    const list = [];
    
    for(let i = 0; i < names.length; i++) {
        list.push(new Human(names[i], age[i]));
    }
    return list
}
const allHumans = Human.registerList();

allHumans.forEach((person, i) => {
    console.log(`${i + 1}. Name: ${person.name}, Age: ${person.age}`)
});
