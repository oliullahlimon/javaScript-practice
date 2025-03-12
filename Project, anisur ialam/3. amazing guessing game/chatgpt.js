const cardBody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = document.querySelector(".result-text");
const remainingAttempts = document.querySelector(".remaining-attempt");
const lostWonCount = document.createElement("p");
const MAX_ATTEMPTS = 5; // Use a named constant for the maximum number of attempts
let attempts = 0;
let numOfWon = 0;
let numOfLost = 0;

cardBody.appendChild(lostWonCount);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (attempts < MAX_ATTEMPTS) {
        // Validate the entered value as a number
        const userGuess = parseInt(guessingNumber.value);
        if (!isNaN(userGuess)) {
            checkResult(userGuess);
        } else {
            resultText.innerHTML = "Please enter a valid number.";
        }

        guessingNumber.value = "";
        guessingNumber.focus();
        attempts++;
        remainingAttempts.innerHTML = `Attempts remaining: ${MAX_ATTEMPTS - attempts}`;

        if (attempts === MAX_ATTEMPTS) {
            endGame();
        }
    }
});

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
};

const checkResult = (userGuess) => {
    const randomNumber = getRandomNumber();

    if (userGuess === randomNumber) {
        resultText.innerHTML = "You have won!";
        numOfWon++;
    } else {
        resultText.innerHTML = `You have lost; the correct number was: ${randomNumber}`;
        numOfLost++;
    }

    updateStats();
};

const updateStats = () => {
    lostWonCount.innerHTML = `Won: ${numOfWon}, Lost: ${numOfLost}`;
    lostWonCount.classList.add("large-text");
};

const endGame = () => {
    guessingNumber.disabled = true;
    checkButton.disabled = true;
    resultText.innerHTML = `Game over. You've reached the maximum number of attempts.`;
};
