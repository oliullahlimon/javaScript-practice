var students = [
    {
        id : 101,
        name : "Oliullah",
        gpa : 4.28
    },
    {
        id : 102,
        name : "Limon",
        gpa : 3.28
    },
    {
        id : 103,
        name : "Rassel",
        gpa : 2.28
    },
    {
        id : 104,
        name : "Sojib",
        gpa : 1.28
    },
]

// traditional function
function studentNames1 () {
   return students.filter(function(x){
        return x.gpa > 3
    }).map(function(y){
        return y.name;
    })
}
console.log(studentNames1());

// arrow function
const studentNames2 = () => students.filter((x) => x.gpa < 3).map((y) => y.name);
console.log(studentNames2());