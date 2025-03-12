// range
let range = document.querySelector("#length");
let lengthNum = document.querySelector("#lengthNum");

range.addEventListener("input", (e) => {
  lengthNum.innerHTML = `Length: ${e.target.value}`;
});
