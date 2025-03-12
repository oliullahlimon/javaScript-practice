// first async function
const x = async () => {
    let dhakaWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("20 deg")
        }, 2000);
    })

    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("25 deg")
        }, 5000);
    })

    // with .then 
    // let dhakaW = dhakaWeather.then(alert)
    // let delhiW = delhiWeather.then(alert)
    // return[dhakaW, delhiW]

    // with async await
    console.log("Fetching Dhaka Weather Please Wait...")
    let dhakaW = await dhakaWeather
    console.log("Fetched Dhaka Weather: " + dhakaW)

    console.log("Fetching Delhi Weather Please Wait...")
    let delhiW = await delhiWeather
    console.log("Fetched Dhaka Weather: " + delhiW)
    return [dhakaW, delhiW]

}

// second async function
const y = async () => {
    console.log("Hey I am Oliullah and I am waiting")
}

const program = async () => {
    console.log("Welcome to weather control room")
    const a = await x()
    const b = await y()
}

program()