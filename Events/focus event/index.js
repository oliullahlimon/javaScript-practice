let input = document.querySelector("input");

input.addEventListener("blur", function(e){
    input.value = e.target.value.toUpperCase();
    console.log("blur is occurred")
    console.log(e.target.value)
})

input.addEventListener("focus", function(e){
    console.log("focus is occurred")
})

input.addEventListener("focusin", function(){
    console.log("focusin is occurred")
})

input.addEventListener("focusout", function(){
    console.log("focusout is occurred")
})