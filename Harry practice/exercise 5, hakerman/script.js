// with async function
const x = [
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to Server 1...",
    "Connection failed. Retrying...",
    "Connecting to Server 2...",
    "Connected Successfully",
    "Username oliullahlimon",
    "Trying Brute Force...",
    "200K+ passwords tried",
    "Match not found",
    "Another 200k passwords trying...",
    "Match found",
    "Accessing Account...",
    "Hacked Successfully"
];
 
const hacker = async () => { // we can run this function without using async
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000);
    })
}

const showHack = async (messages) => {
    await hacker()
   document.querySelector("div").innerHTML += messages + "<br>"
}

(async () => {
    for (let i of x) {
        await showHack(i)
        
    }
})() // using Immediately Invoked Function Expression


// // simple program for hacker man function using if condition
// const messages = [
//     "Initializing Hack tool...",
//     "Connecting to Facebook...",
//     "Connecting to Server 1...",
//     "Connection failed. Retrying...",
//     "Connecting to Server 2...",
//     "Connected Successfully",
//     "Username oliullahlimon",
//     "Trying Brute Force...",
//     "200K+ passwords tried",
//     "Match not found",
//     "Another 200k passwords trying...",
//     "Match found",
//     "Accessing Account...",
//     "Hacked Successfully"
// ];

// function showMessages(index) {
//     if (index < messages.length) {
//         document.querySelector("div").innerHTML += messages[index] + "<br>";
//         setTimeout(() => {
//             showMessages(index + 1);
//         }, 2000);
//     }
// }

// showMessages(0);