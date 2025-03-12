let count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    let text = event.key;

    document.querySelector("#para1").innerHTML = "You have pressed " + text;

    document.querySelector("#para2").innerHTML = "You have pressed " + count;
})