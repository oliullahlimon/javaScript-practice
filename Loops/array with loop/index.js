// array methods
let names = ["Limon", "Emon", "Rassel", "Sojib"]
console.log(names);
let a = names.join(" and "); //join makes array to string.
console.log(a);
console.log(names.length);
let b = names.push("Mahadi"); //push add elements at the end. 
console.log(b) //push returns the new array length.
let c = names.pop() //pop remove elements from the end
console.log(c) //pop returns tge popped elements.
console.log(names)
let d = names.shift() //shift remove elements from the start.
console.log(d)
console.log(names);
// unshift is opposite of shift. unshift add elements at the start.

// concat 2 array
var country1 = ["Bangladesh"];
var country2 = ["Saudi Arabia"];

var country = country1.concat(country2);
console.log(country)

// loop an array
let num = [];

for (var i = 0; i < 5; i++){
    num[i] = parseInt(prompt("Enter a number : "))
}

sum = 0;

for (var i = 0; i < 5; i++){
    console.log(num[i])
    sum = num[i] + sum;
}

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


const identity = ["Limon", "Emon", "Rassel", "Sojib"]

for (let i = 0; i < identity.length; i++) {
    console.log(identity[i]);
}