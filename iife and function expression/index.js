// IIFEs
(function display(massage) {
    console.log(massage)
})("Hi I am massage")

// function expressions
let display2 = function (msg) {
    console.log(msg)
}
display2("I am a massage");

// this is function expression with arrow function
const display3 = (x) => {
    return x * x
}
console.log(display3(5))
