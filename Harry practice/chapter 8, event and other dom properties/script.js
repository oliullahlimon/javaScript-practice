// q1
let btn1 = document.querySelectorAll("button")[0];
btn1.addEventListener("click", () => {
    alert("Alert No 1")
})

let btn2 = document.querySelectorAll("button")[1];
btn2.addEventListener("click", () => {
    alert("Alert No 2")
})

// q3
let google = document.querySelectorAll("div button")[0];
google.addEventListener("click", () => {
    let p = "https://www.google.com";
    window.open(p, "-blank") // to open in new tap
    
})
let facebook = document.querySelectorAll("div button")[1];
facebook.addEventListener("click", () => {
    let q = "https://www.facebook.com";
    window.open(q, "") // to open in new tap
})
let twitter = document.querySelectorAll("div button")[2];
twitter.addEventListener("click", () => {
    window.location = "https://www.twitter.com"; // to open in same page
})

// q5
setInterval(() => {
    document.querySelector("#bulb").classList.toggle("bulb")
}, 300);