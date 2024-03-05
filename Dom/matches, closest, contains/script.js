// code with harry
let id1 = document.querySelector("#id1")
let span1 = id1.querySelector("#span1")
// matches
console.log(id1.matches(".box"))
console.log(id1.matches("#id1"))
console.log(id1.matches(".square"))

// closest
console.log(span1.closest("#id1"))
console.log(span1.closest("#span1"))
console.log(span1.closest("#id2"))

// contains
console.log(id1.contains(span1))
console.log(span1.contains(span1))
console.log(span1.contains(id1))