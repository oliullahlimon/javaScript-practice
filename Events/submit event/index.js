let form = document.querySelector("form")
let name = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

form.addEventListener("submit", formHandler);

function formHandler (e) {
    e.preventDefault();
    
    const userInfo = {
        Name: name.value,
        Email: email.value,
        Password: password.value,
    };

    console.log(userInfo);

    name.value = "";
    email.value = "";
    password.value = "";
}