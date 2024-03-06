// Higher order array methods

// map return array automatically
let numbers = [1,2,3,4]
let squareNumbers = numbers.map((x) => {
    return x * x; //[1*1, 2*2, 3*3, 4*4]
});
console.log(squareNumbers);

// filter
let numbers2 = [10,2,35,44,4,36]
let newNumbers = numbers2.filter((x) => {
    return x > 10;
});
console.log(newNumbers);

// reduce
const numbers3 = [10,2,5,4,4,6]
let totalNumbers = numbers3.reduce((a, b) => {
    return a + b; //{10+2=12, 12+5=17, 17+4=21, 21+4=25, 25+6=31}
});
console.log(totalNumbers);

// filter the reduce
const numbers4 = [10,2,35,4,36]
const sumFilterNumbers = numbers4.filter((x) => {
    return x > 10;
}).reduce((a, b) =>{
    return a + b;
});
console.log(sumFilterNumbers);