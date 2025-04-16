// q-1.
let age = parseInt(prompt("Enter your age"));

if (age > 18) {
    alert(`You can Drive`)
} else {
    alert(`You can't Drive`)
}


// q-2.
let runAgain = true;

while (runAgain) {
    let age = parseInt(prompt("Enter Your Age"))
    const canDrive = () => {
        if (age >= 18) {
            alert("You can Drive")
        } else {
            alert(`You can't Drive`)
        }
    }
    canDrive() // this function must be ahead of confirm object other wise it wont work properly.
    runAgain = confirm("Do you want to run again")
}


// q-3.
let runAgain2 = true;

while (runAgain2) {
    let age = parseInt(prompt("Enter Your Age"))
    if (age < 0) {
        console.error("Please enter a valid age")
        break;
    }
    const canDrive = () => {
        if (age >= 18) {
            alert("You can Drive")
        } else {
            alert(`You can't Drive`)
        }
    }
    canDrive() // this function must be ahead of confirm object other wise it wont work properly.
    runAgain2 = confirm("Do you want to run again")
}


// q-4.
let num = parseInt(prompt("Enter a number"))

if (num > 4) {
    location.href = "https://google.com"
}


// q-5.
let color = prompt("Enter your page color")
document.body.style.background = color;