// styling html elements using javaScript
let linked = document.querySelector("#link");
linked.style.textDecoration = "none";
linked.style.color = "green";
linked.style.fontSize = "1.5rem";

// here we edited inner html of heading1 and heading2
// here we created and added heading3 into the div
// here we removed heading2
// here we added a new element named heading0 before heading 1
// here we created heading4 and replaced it with heading1 
let myDiv = document.querySelector("div");

let heading1 = document.querySelectorAll("div h1")[0];
heading1.innerHTML = "Text has been Changed"

let heading2 = document.querySelectorAll("h1")[1];
heading2.innerHTML = "This text has also been changed"

// creating and adding new html element
let heading3 = document.createElement("h1");
let text1 = document.createTextNode("This is heading 3")
heading3.appendChild(text1);
myDiv.appendChild(heading3);

// remove element
myDiv.removeChild(heading2)

// new element always added at the end. here we are adding elements wherever we want.
let heading0 = document.createElement("h1");
let text2 = document.createTextNode("This is heading 0");
heading0.appendChild(text2);
myDiv.insertBefore(heading0, heading1);

// replacing elements
let heading4 = document.createElement("h1");
let text3 = document.createTextNode("This is heading 4");
heading4.appendChild(text3);
myDiv.replaceChild(heading4, heading1);


// code with harry html insertion methods
let div = document.querySelector("#div2");
// shortcut of create and add element.
// div.innerHTML = div.innerHTML + "<h1>Hello World</h1>"

let div3 = document.createElement("div");
div3.innerHTML = "<h1>This is me</h1>"

div.append(div3) //Inset at the end of div/node
// div.prepend(div3) //Inset at the beginning of div/node
// div.before(div3) //Inset before div/node
// div.after(div3) //Inset after div/node
// div.replaceWith(div3) // Replaces with div3