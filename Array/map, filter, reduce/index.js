// Higher order array methods

// map
// map return array automatically
// map return a new array
// map return a new array with the results of calling a provided function on every element in the calling array
let numbers = [1, 2, 3, 4];
let squareNumbers = numbers.map((x) => {
  return x * x; //[1*1, 2*2, 3*3, 4*4]
  // return x * x; // [1, 4, 9, 16]
});
console.log(squareNumbers);

// filter
// filter return array automatically
// filter return a new array
// filter return a new array with all elements that pass the test implemented by the provided function
let numbers2 = [10, 2, 35, 44, 4, 36];
let newNumbers = numbers2.filter((x) => {
  return x > 10;
  // return x > 10; // [35, 44, 36]
  // return x < 10; // [2, 4]
});
console.log(newNumbers);

// reduce
// reduce return a single value
const numbers3 = [10, 2, 5, 4, 4, 6];
let totalNumbers = numbers3.reduce((acc, elm) => {
  // a is the accumulator
  // b is the current value
  // a is the result of the previous iteration
  return acc + elm; //{10+2=12, 12+5=17, 17+4=21, 21+4=25, 25+6=31}
  // return a - b; //{10-2=8, 8-5=3, 3-4=-1, -1-4=-5, -5-6=-11}
});
console.log(totalNumbers);

// filter the reduce
const numbers4 = [10, 2, 35, 4, 36];
const sumFilterNumbers = numbers4
  .filter((x) => {
    return x > 10;
    // return x > 10; // [35, 36]
  })
  .reduce((a, b) => {
    return a + b; //{35+36=71}
    // return a - b; //{35-36=-1}
  });
console.log(sumFilterNumbers);

const numbers5 = [10, 2, 35, 4, 36];
const highestNumber = numbers5.reduce((a, b) => Math.max(a, b));
console.log(highestNumber); // 36

// filter and map
const numbers6 = [10, 2, 35, 4, 36];
const filteredNumbers = numbers6
  .filter((x) => {
    return x % 2 == 0;
    // return x % 2 == 0; // [10, 2, 4, 36]
  })
  .map((x) => x * 2); // [20, 4, 8, 72]
console.log(filteredNumbers);

// every
// every return true or false
// every return true if all elements in the array pass the test
// every return false if at least one element in the array fails the test
const numbers7 = [10, 2, 35, 4, 36];
const isEven = numbers7.every((x) => x % 2 == 0);
console.log(isEven);

// some
// some return true or false
// some return true if at least one element in the array passes the test
// some return false if all elements in the array fail the test
const numbers8 = [10, 2, 35, 4, 36];
const isSomeEven = numbers8.some((x) => x % 2 == 0);
console.log(isSomeEven);

// sort
// sort return a new array
// sort return a new array with the elements sorted in ascending order
const numbers9 = [10, 2, 35, 4, 36];
const sortedNumbers = numbers9.sort((a, b) => {
  // a is the first element
  // b is the second element
  // a is the result of the previous iteration
  return a - b;
});
console.log(sortedNumbers);
