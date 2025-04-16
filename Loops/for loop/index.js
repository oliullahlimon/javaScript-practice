
for (let x = 1; x <= 10; x = x + 1) {
    document.write("<h1>Bangladesh</h1>");
}



for (let x = 1; x <= 100; x = x + 1) {
    document.write(" " + x);
}



for (let x = 1; x <= 99; x = x + 2) {
    document.write(" " + x);
}



for (let x = 2; x <= 100; x = x + 2) {
    document.write(" " + x);
}



let m = parseInt(prompt("Enter the first number : "));
let n = parseInt(prompt("Enter the last number : "))

let sum = 0;

for (let x = m; x <= n; x = x + 1) {
    sum = sum + x;
}

console.log(" " + sum);



for (let x = 1; x <= 5; x = x + 1) {

    let sum1 = parseInt(prompt("Enter the first number : "));
    let sum2 = parseInt(prompt("Enter the last number : "));

    sum = sum1 + sum2;

    console.log("Result = " + sum);
}