class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(`${this.name} is running`)
    }
    shout() {
        console.log(`${this.name} is barking`)
    }
}

// Define a class named Monkey that extends Animal
// we can use animal class and methods for monkey
class Monkey extends Animal {
    eat() {
         console.log(`${this.name} is eating banana`)
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("Bruno", "White")
let mky = new Monkey("Chintu", "Orange")

ani.run()
ani.shout()
mky.shout()
mky.eat()
mky.hide()
// we can not use monkey class or methods for animal
ani.eat() // it will give error

// Animal is parent class of Monkey and Monkey is child class of Animal
// we can use parent class methods for child class
// we can not use child class methods for parent class