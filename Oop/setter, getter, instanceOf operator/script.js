class Animal {
    constructor(name) {
        this._name = name
    }
    fly() {
        console.log("I am flying")
    }
    get name() {
        return this._name // use _ with name cause used name with get.
    }
    set name(newName) {
        this._name = newName // use _ with name cause used name with get.
    }
    
}

class Rabbit extends Animal {
    eat() {
        console.log("Eating carrot")
    }
}

let a = new Animal("Messi")
a.fly()
console.log(a.name)
a.name = "Jack"
console.log(a.name) // name changed to jack

console.log(a instanceof Animal)
let x = 3323;
console.log(x instanceof Animal)
let r = new Rabbit("Bruno")
r.eat()
console.log(r instanceof Animal)