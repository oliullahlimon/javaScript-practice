// confirm popup
function deleteSomething () {
    let value = confirm("Do you want to delete?");
    if (value) {
        console.log("deleted");
    }
    else {
        console.log("not deleted");
    };
}

deleteSomething();

// prompt popup
let name = prompt("Enter your name: ");

function welcomeMessage () {

let h1 = document.createElement("h1");
let text;

if (name == null || name == "") {
    text = "No name found"
}
else {
    text = "Welcome " + name;
}

let textNode = document.createTextNode(text.toUpperCase());
h1.appendChild(textNode);
document.body.appendChild(h1);
}

welcomeMessage();