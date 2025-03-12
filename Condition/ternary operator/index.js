let x = Number(prompt("Enter a number : "));
let result = x > 0 ? "Positive" : x < 0 ? "Negative" : "Zero";
console.log(result);



let a = Number(prompt("Enter a number : "));
let b = Number(prompt("Enter a number : "));
let c = Number(prompt("Enter a number : "));

let ln = a > b && a > c ? a : b > a && b > c ? b : c;
console.log("Large Number is " + ln);
