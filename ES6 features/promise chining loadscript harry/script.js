// code with harry

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds")
//         resolve(28)
//     }, 2000);
// })
// // console.log(p1)

// p1.then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2 resolved")
//         }, 2000);
//     }) // we can get this promise return value in the next .then() method.
// }).then((value) => {
//     console.log(value)
//     return 50; // this return value is not a promise but we can also get this value in the next .then() method.
// }).then((value) => {
//     console.log(value)
// })


// loadScript function
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded sir")
        }
        script.onerror = () => {
            reject()
        }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
}).then((value) => {
    setTimeout(() => {
        console.log("Second script ready")
    }, 2000);
}).catch((error) => {
    console.log("We are sorry")
})