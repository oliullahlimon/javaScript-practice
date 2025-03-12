let input = document.querySelector("input");
let para = document.querySelector("p");

input.addEventListener("copy", function(){
    para.innerHTML = "You have copied"
})

input.addEventListener("cut", function(){
    para.innerHTML = "You have cut"
})

input.addEventListener("paste", function(){
    para.innerHTML = "You have paste"
})