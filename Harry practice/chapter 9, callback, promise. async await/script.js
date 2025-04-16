// // q-1
// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve(alert(src))
//         }
//         script.onerror = () => {
//             reject("Sorry")
//         }
//     })
// }

// const p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value) => {
//     console.log("script has been loaded")
// }).catch((err) => {
//     console.log(err)
// })

// End

// // loadScript in normal way
// let script = document.createElement("script");
// script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
// document.body.appendChild(script)

// const loadScript = () => {
//     alert(script.src)
// }

// script.addEventListener("load", loadScript);

// End

// // q2
// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve(alert(src))
//         }
//         script.onerror = () => {
//             reject("Sorry")
//         }
//     })
// }

// const program = async () => {
//     let x = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// }

// program()

// End

// // q3
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Everything is good")
//         reject("There is an error")
//     }, 3000);
// })

// let a = async () => {
//     try {
//         let b = await p;
//         console.log(b)
//     } catch (error) {
//         console.log(error)
//         console.log("Error has been handled")
//     }
// }

// a();

// End

// // q4 with variable p1, p2, p3 is variable
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10)
//     }, 2000);
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20)
//     }, 3000);
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 1000);
// })

// const run = async () => {
//     console.time("run1")
//     const result = await Promise.all([p1, p2, p3])
//     console.log(result) // It takes 3 sec cause it run at the same time
//     console.timeEnd("run1")

//     // console.log(p1)
//     // console.log(p2)
//     // console.log(p3)

//     // console.time("run2")
//     // const a1 = await p1
//     // const a2 = await p2
//     // const a3 = await p3
//     // console.log(a1, a2, a3) It takes 3 sec cause p1, p2, p3 is variable and it runs at the same time.
//     // console.timeEnd("run2")
    
// }

// run ()

// End

// q4 with function p4, p5, p6 is function
const p4 = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 3000);
    })
}

const p5 = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000);
    })
}

const p6 = () => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 2000);
    })
}

const program = async () => {
    console.time("run3")
    const result = await Promise.all([p4(), p5(), p5()])
    console.log(result) // It takes 3 sec cause it run at the same time
    console.timeEnd("run3")

    // console.time("run4")
    // let a1 = await p4()
    // let a2 = await p5()
    // let a3 = await p6()
    // console.log(a1, a2, a3) //It takes 6 sec cause p4, p5, p6 is function and it runs one by one.
    // console.timeEnd("run4")
}

program()