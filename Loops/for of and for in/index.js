// for...of
const names = ["Limon", "Rassel", "Sojib"];

for(let name of names){
    console.log(name);
} //for of loop can be used to get the values from an array/string or iterable object

// for...in
for(let i in names){
    console.log(i);
} //for in loop used to get the keys from an array/object

// for ... in with object
let student = {
    name : "Oliullah",
    id : 101,
    cgpa : 3.23
}
for(let info in student){
    console.log(`${info} : ${student[info]}`);
} //for in loop used to get the keys from an array/object

// for...of with object
for(let value of student){
    console.log(value);
} // object is not iterable for (for...of)
//  It cannot be used to directly iterate over the properties of a plain JavaScript object.