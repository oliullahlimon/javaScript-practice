// array methods
let names = ["Limon", "Emon", "Rassel", "Sojib"]
console.log(names);
let a = names.join(" and "); //join makes array to string.
console.log(a);
console.log(names.length);
let b = names.push("Mahadi"); //push add elements at the end. 
console.log(b) //push returns the new array length.
let c = names.pop() //pop remove elements from the end
console.log(c) //pop returns the popped elements.
console.log(names)
let d = names.shift() //shift remove elements from the start.
console.log(d)
console.log(names);
// unshift is opposite of shift. unshift add elements at the start.

// concat method, concat 2 array
var country1 = ["Bangladesh", "Pakistan"];
var country2 = ["Saudi Arabia", "Yemen"];

var country = country1.concat(country2);
console.log(country)
// doesn't change existing array  

// sort method
const num1 = [10, 3, 20, 333, 423, 1, 43, 47]
num1.sort()
console.log(num1) // sort method is used to sort an array alphabetically not serial of number.

// sort with compare function
let compare = (a, b) => {
    return a - b;
}
const num2 = [10, 3, 20, 333, 423, 1, 43, 47]
num2.sort(compare)
console.log(num2) 