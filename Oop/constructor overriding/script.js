// Define a class named Employee
class Employee {
    constructor(name) {
        console.log(`${name} - Employee's constructor is here`)
        this.name = name
    }
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logged out`)
    }
    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

// Define a class named Programmer that extends Employee
class Programmer extends Employee {
    constructor(name) {
        super(name)
        this.name // must use this after super()
        console.log(`${name} - this is a newly written constructor`)
    }
    // constructor(){ --> if there is no constructor in this child class, this is created automatically
    // super()
    // }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`)
    }
     // Override the requestLeaves method to call the original and add a message
    requestLeaves() {
        super.requestLeaves(4) // Call the original requestLeaves method with 4 leaves
        console.log("One extra has granted")
    }
}

let pro = new Programmer("Oliullah");
pro.login()
pro.requestLeaves(3)