// create and use object
// adding a constructor
// adding a function inside a constructor

let student = {
    student_name: "Limon",
    age: 25,
    cgpa: 3.12,
    lang: ["Bengali", "Hindi", "English"]
}
console.log(student.student_name)
console.log(student.age)
console.log(student.cgpa)
console.log(student.lang)
student.address = "Mirpur" //adding new key and value
console.log(student)
student.cgpa = 3.50 //changing value of key
console.log(student)



function Student(name, age, cgpa, lang){   // this is constructor
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.cgpa)
        console.log(this.lang)
    }
}

let student1 = new Student("Limon", 25, 3.12, ["Bengali", "Hindi", "English"]);
let student2 = new Student("Emon", 22, 3.45, ["Bengali", "Hindi", "English"]);
let student3 = new Student("Rasel", 35, 3.34, ["Bengali", "Hindi", "English"]);

student1.display()
student2.display()
student3.display()