// input
let input = document.querySelector("input");
input.addEventListener("change", changeHandler);

function changeHandler(e) {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.value);
}

//checkbox
let programs = document.querySelectorAll("input[name=program]");

Array.from(programs).map((program) => {
  program.addEventListener("change", programHandler);
});

function programHandler(e) {
  if (e.target.checked) {
    console.log(e.target.value);
  }
}

// select
let department = document.querySelector("#department");
department.addEventListener("change", departmentHandler);

function departmentHandler(e) {
  console.log(e.target.value);
}
