let div = document.querySelector("div");

console.log(div.getAttribute("id"))
console.log(div.hasAttribute("class"))
console.log(div.hasAttribute("style"))
div.setAttribute("class", "oliulla limon")
div.removeAttribute("id")
console.log(div.attributes)
// div.setAttribute("hidden", "true")

// create custom attributes
console.log(div.dataset)
console.log(div.dataset.sport)
console.log(div.dataset.player)