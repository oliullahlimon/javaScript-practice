const cardBody = document.querySelector(".card-body")
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = document.querySelector(".result-text");
const remainingAttempts = document.querySelector(".remaining-attempt");
const lostWonCount = document.createElement("p");
cardBody.appendChild(lostWonCount)

const maxAttempts = 5;
let attempts = 0;
let numOfWon = 0;
let numOfLost = 0;


form.addEventListener("submit", (e) => {
    e.preventDefault() // to prevent default behavior of submit/an event.
    checkResult(guessingNumber.value)
    guessingNumber.value = ""; // to remove the given value in input field
    guessingNumber.focus(); // to keep my input field focused always
    attempts++;
    remainingAttempts.innerHTML = `Attempt remains: ${maxAttempts - attempts}`
    if (attempts == 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
        resultText.innerHTML = `Game over. You've reached the maximum number of attempts.`;
    }
    
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
}

const checkResult = (value) => {
    const randomNumber = getRandomNumber()
    if (value == randomNumber) {
        resultText.innerHTML = "You Have Won"
        numOfWon++;
    } else {
        resultText.innerHTML = `You Have Lost; Random Number was: ${randomNumber}`
        numOfLost++;
    }
    
    lostWonCount.innerHTML = `Won: ${numOfWon}, Lost: ${numOfLost}`
    lostWonCount.classList.add("large-text")
}