// setting interval with bind method

class Timer {
    constructor(startNum = 0, incrementNum = 1) {
        this.count = startNum;
        this.incrementNum = incrementNum;
    }
    
    start() {
        setInterval(
            function() {
            console.log(this);
            console.log(this.count);
            this.count += this.incrementNum;
        }.bind(this),
        1000    
        )
    }
}

const timer = new Timer();
timer.start()


// ANOTHER METHOD/WAY OF DOING BIND WITH SETINTERVAL

class Timer {
    constructor(startNum = 0, incrementNum = 1) {
        this.count = startNum;
        this.incrementNum = incrementNum;
    }
    
    start() {
        setInterval(this.incrementPrint.bind(this), 1000)
    }
    
    incrementPrint() {
        console.log(this);
        this.count += this.incrementNum;
    }
}

const timer = new Timer();
timer.start()
