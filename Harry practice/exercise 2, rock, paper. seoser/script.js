let user = prompt(`Enter R, P or S`).toUpperCase()
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["R", "P", "S"][cpuI]; // converting using index number
document.write(`Cpu: ${cpu} <br> User: ${user} <br>`)

if (user === cpu) {
    document.write("It's a tie");
} else if ((user === "R" && cpu === "S") || 
           (user === "P" && cpu === "R") || 
           (user === "S" && cpu === "P")) {
    document.write("The Winner is User")
} else {
    document.write("The Winner is Cpu")
}

// // using function
// let user = prompt(`Enter R, P or S`).toUpperCase()
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["R", "P", "S"][cpuI]; // converting using index number

// let match = () => {
//     if (user === cpu) {
//         return "It's a tie";
//     } else if ((user === "R" && cpu === "S") || 
//                (user === "P" && cpu === "R") || 
//                (user === "S" && cpu === "P")) {
//         return "The Winner is User"
//     } else {
//         return "The Winner is Cpu"
//     }
// }
// document.write(`Cpu: ${cpu} <br> User: ${user} <br> ${match()}`)