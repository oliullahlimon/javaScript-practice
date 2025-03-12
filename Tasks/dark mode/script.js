const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

const updateBody = () => {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
};

updateBody();

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

const updateLocalStorage = () => {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
};
