// finding elements
let heading1 = document.getElementsByTagName("h1")[0];
heading1.innerHTML = "This is heading 1";

let heading2 = document.getElementsByClassName("heading2")[0];
heading2.textContent = "This is heading 2"

let heading3 = document.getElementById("heading3");
heading3.innerHTML = "This is heading 3"

let heading4 = document.querySelectorAll("h1")[3];
heading4.innerText = "This is heading 4"

let heading5 = document.querySelectorAll(".heading5")[0];
heading5.textContent = "This is heading 5"

let heading6 = document.querySelectorAll("#heading6")[0];
heading6.innerText = "This is heading 6"

let heading7 = document.querySelector("#heading7");
heading7.innerHTML = "This is heading 7"
