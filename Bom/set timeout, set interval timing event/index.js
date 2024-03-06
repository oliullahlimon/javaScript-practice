const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const message = document.querySelector("p");

// settimeout
button1.addEventListener("click", () => {
    message.textContent = "User Registration Successful"

    setTimeout(() => {
        message.textContent = "";
    }, 2000);
})

// interval
button2.addEventListener("click", displayCount);

function displayCount () {
    let count = 1;
    message.textContent = count;

    setInterval(() => {
        count++
        message.textContent = count;
    }, 100);
}

// interval can be done by this way also
button3.addEventListener("click", displayCount2);

function displayCount2 () {
    let count = 1;

    setInterval(() => {
        message.textContent = count++;
    }, 100);
}


// with arrow function
const displayCount3 = () => {
    let count = 1;

    setInterval(() => {
        message.textContent = count++;
    }, 100);
}

button4.addEventListener("click", displayCount3);
// Arrow functions are not hoisted. They must be defined before they are used.
// I cannot use arrow function before they are defined
