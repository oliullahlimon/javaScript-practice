let a = {
    name: "Oliullah",
    language: "JavaScript"
}
console.log(a)

let p = {
    run: () => {
        alert("run")
    }
}

a.__proto__ = p

p.__proto__ = {
    name2: "Limon" // prototype of p
}
a.run()
console.log(a.name2)

// here we made a object named a.
// then made a another object named p and inside p we made a function called run.
// then we made p as a prototype of a.
// then we also made prototype of p.