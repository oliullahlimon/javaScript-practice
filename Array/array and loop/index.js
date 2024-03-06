// loop an array
const num = [];
let sum = 0;

for (var i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Enter a number : "))
    sum = num[i] + sum;
    console.log(num[i]) // inside of loop console printing value of num not a array.
}
console.log(num) // outside of loop console printing value num as a array.
console.log("Sum = " + sum)

// with for loop
const number = [1, 2, 3, 4]
const modifiedNum =[];

for (let i = 0; i < number.length; i++) {
  modifiedNum[i] = number[i] + 3;
}
console.log(number);
console.log(modifiedNum);

// with map function
const number2 = [1, 2, 3, 4]

const number3 = number2.map((x) => {
    return x + 3;
})
console.log(number3)

// for loop
const identity = ["Limon", "Emon", "Rassel", "Sojib"]

for (let i = 0; i < identity.length; i++) {
    console.log(identity[i]);
}