// traditional function
display1();
function display1(){
    console.log("I am display1")
}// traditional functions are hoisted. I can access this before initialization.

// arrow function 
const display2 = () =>
    console.log("I am display2")
display2();
// Arrow functions are not hoisted. They must be initialize before they are accessed.
// I cannot access arrow function before they are initialized


// return and 2nd bracket must be apply at the same time and this is good practice.
const display3 = () => {return "I am display3"}
console.log(display3())

// traditional function
function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(10, 20));

// arrow function
const add2 = (num1, num2) => num1 + num2;
console.log(add2(20, 30));