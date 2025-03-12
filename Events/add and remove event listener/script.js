let btn = document.querySelector('button');

let x = () => {
    alert("This is Oliullah")
    console.log()
}
btn.addEventListener("click", x)

let y = () => {
    alert("This is Limon")
}
btn.addEventListener("click", y)

btn.removeEventListener("click", y)