document.querySelector("button").addEventListener("click", myFunction)

function myFunction() {
    alert("hello world")
}



var myVar = document.querySelector("#para");

myVar.addEventListener("mouseover", function(){
    myVar.classList.add("my-style")
});

myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("my-style")
});


// event listeners with multiple elements

let buttons = document.querySelectorAll(".myButton");
len = buttons.length

for(let i = 0; i < len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){

        let text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " is clicked";
    });    
}   