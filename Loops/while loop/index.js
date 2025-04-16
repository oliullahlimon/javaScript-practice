let x = 1;
let sum = 0;

while (x <= 10) {
    sum = sum + x;
    x = x + 1;
}

document.write("Result = " + sum + "</br>");



let a = 1;
let sum1 = 0;

while (a <= 50) {

    if (a % 3 == 0 && a % 5 == 0) {
        document.write(" " + a);
        sum1 = sum1 + a;
    }

    a = a + 1;
}

document.write(" = " + sum1);

