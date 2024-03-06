// for loop
let numbers = [10,20,30,40];
for(let x = 0; x < numbers.length; x++)
{
    console.log(numbers[x]);
}

console.log("")

// forEach with traditional function
let numbers1 = [10,20,30,40];
numbers1.forEach(myFunction);

function myFunction(x){
    console.log(x);
}

console.log("")

// forEach with arrow function
let numbers2 = [10,20,30,40];
numbers2.forEach((x) => {
    console.log(x);
})

// squaring
let numbers3 = [10,20,30,40];
let squareNumbers = [];
numbers3.forEach((x) => {
    squareNumbers.push(x * x)
})
console.log(numbers3)
console.log(squareNumbers)


let numbers4 = [10,20,30,40];
numbers4.forEach((value,index,arr) => {
    arr[index] = value + 5;
})
console.log(numbers4);