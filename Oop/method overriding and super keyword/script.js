// Define a class named Employee
class Employee {
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
    requestCoffee() {
        console.log(`Employee has requested ${x} coffees`)
    }
     // Override the requestLeaves method to call the original and add a message
    requestLeaves() {
        // By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
        super.requestLeaves(4) // Call the original requestLeaves method with 4 leaves
        console.log("One extra has granted")
    }
}

let emp = new Employee();
let pro = new Programmer();
emp.requestLeaves(3)
pro.requestLeaves()