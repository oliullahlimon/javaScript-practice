
const div = document.querySelector("div");

div.addEventListener("click", function(e){
    console.log("click is occurred");
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.innerHTML);
    console.log(e.target.textContent);
    console.log(e.target.innerText);
});

const buttons = document.querySelectorAll(".btn");
console.log(buttons)

// with map
Array.from(buttons).map((limon) => {
    limon.addEventListener("click", function(e){
        console.log(e.target.innerText)
    })
});

// // with for loop
// for (let i = 0; i < 3; i++) {
//     buttons[i].addEventListener("click", (e) => {
//         console.log(e.target.innerText);
//     })
// }


div.addEventListener("dblclick", function(){
    console.log("dblclick is occurred");
});

div.addEventListener("mousedown", function(){
    console.log("mousedown is occurred");
});

div.addEventListener("mouseup", function(){
    console.log("mouseup is occurred");
});

div.addEventListener("mouseenter", function(){
    console.log("mouseenter is occurred");
});

div.addEventListener("mouseleave", function(){
    console.log("mouseleave is occurred");
});

div.addEventListener("mouseover", function(){
    console.log("mouseover is occurred");
});

div.addEventListener("mousemove", function(e){
    console.log("mousemove is occurred");
    console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
    console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
});