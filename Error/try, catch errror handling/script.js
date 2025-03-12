console.log("car")
console.log("bike")
try {
    console.log(bus)
} catch (error) {
    console.log(error)
}
console.log("truck")


setTimeout(() => {
    console.log("Hacking wifi... Please wait...")
}, 1000);

setTimeout(() => {
    console.log("Fetching username and password... Please wait...")
    try {
        console.log(rahul)
    } catch (error) {
        console.log("There is an error " + error)
    }
    console.log("Rahul")
}, 2000);

try {
    console.log(limon)
} catch (error) {
    console.log("There is an error " + error)
}

setTimeout(() => {
    console.log("Hacking Rahul's facebook id... Please wait...")
}, 3000);

setTimeout(() => {
    console.log("User and password of Rahul (#2923923)... Please wait...")
}, 4000);
