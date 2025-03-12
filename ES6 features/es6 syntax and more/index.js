let x = 20;
let y = 20;

let sum = x + y;
console.log(`Sum is ${sum}, The end. `);

let name = `Oliullah Limon`;
let message = `I am ${name}. I am learning JavaScript.`;
console.log(message);

// function
const add = (x, y) => {
  let sum = x + y;
  console.log(sum);
};
add(48, 93);

function message1(text) {
  console.log(`${text}`);
}
message1("I am learning js");

// default parameter/operator
function message2(text = "Hello this is a default parameter") {
  console.log(`${text}`);
}
message2();

// rest parameter/operator only use in the last.
function printNum(x, y, ...z) {
  console.log(`${x},${y},${z}`);
}
printNum(10, 20, 30, 40, 50, 60);

// spread parameter/operator can be use first/last/anywhere.
//This allows us to quickly copy all or parts of an existing array into another array
function addNum(x, y, z) {
  return x + y + z;
}
let numbers = [1, 2, 3];
console.log(addNum(...numbers));

let numbers1 = [...numbers, 4, 5, 6];
console.log(numbers1);

let p1 = {
  name: "Oliullah",
  age: 25,
};
let p2 = {
  nationality: "bangladesh",
  occupation: "student",
};
let p = { ...p1, ...p2 };
console.log(p);

// object literals
function studentInfo1(name, age) {
  return {
    name,
    age,
  };
}
console.log(studentInfo1("Rokibul Islam", 29));

// common function inside object
let message3 = {
  body: function () {
    return `Hi, I am object function`;
  },
};
console.log(message3.body());

// e6/consize syntax function inside object
let message4 = {
  body() {
    return `Hi, I am object function`;
  },
};
console.log(message4.body());

// for...of
const names = ["s1", "s2", "s3"];

for (let name of names) {
  console.log(name);
} //for of loop can be used to get the values from an array

// for...in
for (let i in names) {
  console.log(i);
} //for in loop used to get the keys from an array/object

// for ... in with object
let student = {
  name: "Oliullah",
  id: 101,
  cgpa: 3.23,
};
for (let info in student) {
  console.log(`${info} : ${student[info]}`);
} //for in loop used to get the keys from an array/object
