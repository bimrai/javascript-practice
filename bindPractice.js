// touching on binds and practicing. so far i have been using original code for all the js practice ive done on this repo.
// so far it helped build using my own what if use case scenarios to see if these concepts or technique applies well or 
// not so next time i know its best use case

const playstation = {
    system: "PlayStation",
    platform: "PlayStation",
    company: "Sony", 
    on: function() {
        console.log(`Accessing ${this.system}:`);
        return `${this.platform} launching... ${this.platform} finished launching.`
    }
}

const xbox = {
    system: "Xbox",
    platform: "Xbox",
    company: "Microsoft"
}

const pc = {
    system: "PC",
    platform: "Steam",
    company: "valve"
}

console.log(playstation.on())
console.log(playstation.on.call(xbox))
console.log(playstation.on.call(pc))

console.log("-----------------------------------------------------------")

// this will essentially do the same thing without making it 

const accessPlaystation = playstation.on.bind(playstation);
const accessXbox = playstation.on.bind(xbox);
const accessPc = playstation.on.bind(pc);

console.log(accessPlaystation());
console.log(accessXbox());
console.log(accessPc());
