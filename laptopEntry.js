// quick 5 mins practice on class/constructors and methods as my gf patiently waits to continue scooby doo movie xD 
// will practice one for pc parts and such im curious and now shes saying "bruhh can we watch noowww???" okay gotta go bye

class Laptop {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    
    stateLaptop() {
        console.log(`New Laptop Entry - Laptop Brand: ${this.brand}, Model: ${this.model}`)
    }
}

class GamingLaptop extends Laptop {
    constructor(brand, model, gpu, cpu, ram) {
        super(brand, model)
        this.gpu = gpu
        this.cpu = cpu
        this.ram = ram
    }
    
    stateGamingLaptop() {
        console.log(`New Laptop Entry - Laptop Brand: ${this.brand}, Model: ${this.model}, Graphics Card: ${this.gpu}, CPU: ${this.cpu}, RAM: ${this.ram}`)
    }
}

let appleLaptop = new Laptop("Apple", "Macbook Pro M1 14 inch")
appleLaptop.stateLaptop()

let msiLaptop = new GamingLaptop("MSI", "Katana 17", "RTX 4050", "Intel i7", "16GB")
msiLaptop.stateGamingLaptop()


