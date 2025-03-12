// array destructure
let num = [10,20,30,40,50];
let [num1, num2, num3, num4, num5] = num;
console.log(num1);
console.log(num5);
console.log(num3);

// changing num to alfa
let nums = [1, 2, 3]
let [x, y, z] = nums;
console.log(x, y, z)
console.log(x === 1)

// swap variables
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b)


const studentInfo1 = {
    id : 101,
    fullName : "Oliullah Limon",
    gpa : 4.28
};
console.log(studentInfo1.id)
console.log(studentInfo1.fullName)

// object destructure
const studentInfo2 = {
    id : 102,
    fullName : "Oliullah Limon",
    gpa : 4.28
};

const {id, fullName} = studentInfo2;

console.log(id)
console.log(fullName)

// nested object destructure
const studentInfo3 = {
    id : 103,
    fullName : "Oliullah Limon",
    gpa : 4.28,
    languages : {
        native : "Bangla",
        other : "English"
    }
};

const {gpa, languages} = studentInfo3;
console.log(languages)
console.log(languages.native)

// destructuring function parameters
const studentInfo4 = {
    id : 104,
    fullName : "Oliullah Limon",
    gpa : 4.28
};

const student = ({id, fullName}) => {
     console.log(`${fullName}, ${id}`)
}
student(studentInfo4)