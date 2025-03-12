const car = {
    name: "Fiat",
    model: 500,
    color: "White",
    start: function () {
      return "car has started";
    },
    drive: function () {
        console.log("car is driving");
    },
};

console.log(car.name);
console.log(car.start());
car.drive()

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
       return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName())

let date = new Date();
console.log(date)
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString())

let x = "My name is \"Oliullah\" Limon";
let a = 'It\'s alright';
console.log(x);
console.log(a);
console.log(typeof x);

let y = "John";
let z = new String("John");

console.log(y == z);
console.log(typeof y);
console.log(typeof z);

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13))

let string = "Apple, Banana, Kiwi";
let ban = string.slice(7, 13)
console.log(ban)

let ahlehadis = "I love ahlehadis"; // string is not immutable or changeable.
let salafi = ahlehadis.replace("ahlehadis", "salafi")
console.log(ahlehadis)
console.log(salafi)


let text = prompt("Enter your name");

console.log(text)

let text1 = "bangladesh";
text1 = text1.toUpperCase();
console.log(text1);

let num1 = prompt("Enter First Number : ");
let num2 = prompt("Enter Second Number : ");

num1 = parseFloat(num1, 10);
num2 = parseFloat(num2, 10);

let result;

result = num1 + num2;
document.write(num1 + " + " + num2 + " = " + result + "</br>");

result = num1 - num2;
document.write(num1 + " - " + num2 + " = " + result + "</br>");

result = num1 * num2;
document.write(num1 + " * " + num2 + " = " + result + "</br>");

result = num1 / num2;
document.write(num1 + " / " + num2 + " = " + result + "</br>");

result = num1 % num2;
document.write(num1 + " % " + num2 + " = " + result + "</br>");

let far = parseFloat(prompt("Enter Fahrenheit : "));

let cel = (far - 32) * (5 / 9);

document.write("Celsius" + " = " + cel + "</br>");