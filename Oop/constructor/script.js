// Define a class named RailwayForm
class RailwayForm {
    // Constructor method is called when an object is created using 'new'
    constructor(givenName, trainNo) {
        this.name = givenName
        this.trainNo = trainNo
        console.log(`Constructor called... ${givenName}, ${trainNo}`)
    }
    submit() {
        alert(this.name + ": Your form is submitted, Train No is: " + this.trainNo)
    }
    cancel() {
        alert(this.name + ": Your form is cancelled, Train No is: " + this.trainNo)
    }
}


let limonForm = new RailwayForm("Limon", 23891) // new keyword make this to a object
limonForm.submit() // Call the submit method on the limonForm object

let oliullahForm = new RailwayForm("Oliullah", 23892) // new keyword make this to a object
let oliullahForm2 = new RailwayForm("Oliullah", 23893) // new keyword make this to a object++
oliullahForm.submit()
oliullahForm2.submit()
oliullahForm.cancel()