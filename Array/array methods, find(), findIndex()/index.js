// find, findIndex first even number
// 1st way
let numbers1 = [3,37,13,52,12];
const firstEvenNum1 = numbers1.find((x) => x % 2 === 0);
const firstEvenNumIndex1 = numbers1.findIndex((x) => x % 2 === 0);
console.log(firstEvenNum1);
console.log(firstEvenNumIndex1);

console.log("")

// 2nd way
let numbers2 = [67,35,20,53,12];
const evenNumber = (value) => {
    return value % 2 === 0;
}
let firstEvenNum2 = numbers2.find(evenNumber);
let firstEvenNumIndex2 = numbers2.findIndex(evenNumber);
console.log(firstEvenNum2)
console.log(firstEvenNumIndex2)

console.log("")

let students = [
    {
        id : 101,
        gpa : 2.43
    },
    {
        id : 102,
        gpa : 3.43
    },
    {
        id : 103,
        gpa : 4.43
    }
]

let firstGpa3 = students.find(x => x.gpa > 3)
console.log(firstGpa3)