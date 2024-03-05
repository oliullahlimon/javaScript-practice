// Downwards parent to children
let studentList = document.querySelector("ol");
let studentA = studentList.querySelectorAll("li")[0];
let studentB = studentList.children[1];

// Upwards children to parent
let studentC = document.querySelectorAll("li")[2];
studentC.parentElement;

// Sideways siblings to siblings
studentA.nextElementSibling
studentC.previousElementSibling