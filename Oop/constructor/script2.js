class RailwayForm2 {
    constructor(givenName, trainNo, address) {
        this.name = givenName
        this.trainNo = trainNo
        this.address = address
        console.log(`Constructor called... ${givenName}, ${trainNo}`)
    }
    preview() {
        alert(this.name + ": Your form is for Train No : " + this.trainNo + " and Your address is " + this.address)
    }   
    submit() {
        alert(this.name + ": Your form is submitted, Train No is: " + this.trainNo)
    }
    cancel() {
        alert(this.name + ": Your form is cancelled, Train No is: " + this.trainNo)
        this.trainNo = 0
    }
}

let limonForm = new RailwayForm2("Limon", 23891, "13-c, 4-38 Mirpur Dhaka.")
limonForm.preview()
limonForm.submit()
limonForm.cancel()
limonForm.preview()

// You can use your own named function instead of preview, submit, cancel. but the function name should be meaningful.