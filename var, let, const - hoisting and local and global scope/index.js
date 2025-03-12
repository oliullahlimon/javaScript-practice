var x = 1;
var x = 2;
console.log(x);
// we can use same variable with var keyword and the last x's value would be count as the final value.

let y = 1;
// let y = "cat"; // error
console.log(y);
// we can't use same variable with let keyword and it will show error.

const z = 1;
// const z = "cat"; // error
console.log(z);
// we can't use same variable with const keyword and it will show error.

var x = 1;
x = "cat";
console.log(x);
// with var keyword we can change variable's value.

{
  let y = 1;
  y = "cat";
  console.log(y);
}
// with let keyword we can change variable's value.

{
  const z = 1;
  // z = "cat" // error
  console.log(z);
}
// with const keyword we can't change variable's value and it will show error.

// hoisting

//javaScript only hoist declaration to the top but not initialization and its apply for var, let and const
// m = 3; // initialization
console.log(m);
var m = 3; // undefined

// console.log(n) // referenceError
let n = 4; // declaration and initialization must need for access variable that declare with let keyword
console.log(n);
// we cannot access let variables before they are initialize
// it must be initialize before they are accessed.

// console.log(o) // referenceError
const o = 5; // const must be initialized during declaration
console.log(o);
// we cannot access const variables before they are initialize

// traditional function are hoisted
greet();
function greet() {
  console.log("Good Morning");
}

// eat() // cannot access this function before initialization
// this is called function expression with arrow function
const eat = () => {
  console.log("I am having food");
};
eat();
// arrow function are not hoisted
// function expression are not hoisted
// it must be initialize before access

// class expression are not hoisted

// local and global scope
// block and function score are local scope

let a = 8;
{
  console.log(a);
}
console.log(a);

let a1 = 2;
function j() {
  console.log(a1);
}
j();
// we can access variable inside a block scope or a function scope that declared outside

{
  let b = 4;
}

function k() {
  let b = 4;
}
console.log(b);
// but we can not access a variable outside that declared inside a block or a function scope
