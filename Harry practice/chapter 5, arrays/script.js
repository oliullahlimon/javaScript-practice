// q-1
const number1 = [10, 4, 34, 9, 38, 99]
let userInput1 = parseFloat(prompt("Enter a number"))

number1.push(userInput1);
console.log(number1);

// q-2
const number2 = [10, 4, 34, 9, 38, 99]
let userInput2;

while(userInput2 != 0) {
    userInput2 = parseFloat(prompt("Enter a number"))
    number2.push(userInput2);
}
console.log(number2);

// q-3
const number3 = [10, 40, 34, 9, 200, 38, 99]
const newNumber = number3.filter((x) => {
    return x % 10 == 0;
})
console.log(number3)
console.log(newNumber)

// q-4
const number4 = [10, 4, 34, 9, 38, 99]
const squareNumber = number4.map((x) => {
    return x * x;
})
console.log(number4)
console.log(squareNumber)

// q-5
const number5 = [10, 4, 34, 9, 38, 99]
let multiply = number5.reduce((a, b) => {
    return a * b;
})
console.log(number5)
console.log(multiply);