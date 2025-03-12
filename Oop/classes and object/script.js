// Define a class named RailywayForm
class RailywayForm {
    // Method to submit the form
    submit() {
        alert(this.name + ": Your form is submitted, Train No is: " + this.trainNo)
    }
    // Method to cancel the form
    cancel() {
        alert(this.name + ": Your form is cancelled, Train No is: " + this.trainNo)
    }
    // Method to fill the form with given name and train number
    fill(givenName, trainNo) {
        this.name = givenName
        this.trainNo = trainNo
    }
}

// Create an instance of RailywayForm
let limonForm = new RailywayForm() // new keyword make this to a object
// Fill the limonForm instance with name "Limon" and train number 23891
limonForm.fill("Limon", 23891)
// Call the submit method on the limonForm object
limonForm.submit()

let oliullahForm = new RailywayForm()
let oliullahForm2 = new RailywayForm()
oliullahForm.fill("Oliullah", 23892)
oliullahForm2.fill("Oliullah", 23893)

oliullahForm.submit()
oliullahForm2.submit()
oliullahForm.cancel()

// You can use your own named function instead of fill, submit, cancel. but the function name should be meaningful.