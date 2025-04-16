// guessing Game 1
// guess a number from 1 to 5
// generate a random number between 1 to 5
// if the guess number matches random number; then show massage won else lost
// run the game for 5 times
// show the number of won and lost

let numOfWon = 0;
let numOfLost = 0

for (let x = 1; x <= 5; x++) {

    let guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));

    let randomNumber = Math.floor(Math.random() * 5) + 1;
    
    if(guessNumber == randomNumber) {
        numOfWon++
        console.log("You have won");
       
    } else {
        numOfLost++
        console.log("You have lost. Random number was " + randomNumber);
        
    }
}

document.write("Total Number of won = " + numOfWon + "</br>");
document.write("Total Number of lost = " + numOfLost + "</br>");

console.log("")

//  guessing Game 2 with while loop
const randomNumber1 = Math.floor(Math.random() * 10) + 1;
let userGuess1 = prompt("Guess the number between 1 to 10");
let turns1 = 0;

while (userGuess1 != randomNumber1) {
  if (userGuess1 < randomNumber1) {
    userGuess1 = prompt("Your guess was too low. Try again.");
  } else {
    userGuess1 = prompt("Your guess was too high. Try again.");
  }
  turns1++
}

const score1 = 10 - turns1;
console.log(`Congratulations! You guessed the number in ${turns1} turns! Your score is ${score1}.`);

console.log("")

//  guessing Game 3
const randomNumber2 = Math.floor(Math.random() * 10) + 1;
let userGuess2 = prompt("Guess the number between 1 to 10");
let turns2;

for (turns2 = 0; userGuess2 != randomNumber2; turns2++) {
  if (userGuess2 < randomNumber2) {
    userGuess2 = prompt("Your guess was too low. Try again.");
  } else {
    userGuess2 = prompt("Your guess was too high. Try again.");
  }
}

const score2 = 10 - turns2;
console.log(`Congratulations! You guessed the number in ${turns2} turns! Your score is ${score2}.`);

console.log("")

//  guessing Game 4
const randomNumber3 = Math.floor(Math.random() * 10) + 1;
let userGuess3;
let turns3;

for (turns3 = 0; (userGuess3 = prompt("Guess the number between 1 and 10")) != randomNumber3; turns3++) {
  if (userGuess3 < randomNumber3) {
    alert("Your guess was too low. Try again.");
  } else {
    alert("Your guess was too high. Try again.");
  }
}

const score3 = 10 - turns3;
console.log(`Congratulations! You guessed the number in ${turns3} turns! Your score is ${score3}.`);
