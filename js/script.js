// Instruction: Create global variables to select specific HTML elements.
// Solution: Use "document.querySelector" to select the elements.

const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInputLetters = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".span");
const guessMessages = document.querySelector(".message");
const playAgain = document.querySelector(".play-again hide");

// Instructions: Create a global variable titled Magnolia.
const word = magnolia;
const guessLetter = [];

// Instructions: Write a function to add placeholders for each letter.
const placeholder = function (word) {
    const letters = [];
    for (const placeholder of word) {
        console.log(placeholder);
        letters.push("●");
    }
    wordProgress.innerText = letters.join("");
};

placeholder(word);


// Instructions: Add an event listener to the guess button.
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    guessMessages.innerText = "";
    const guess = guessInputLetters.value;
    const goodGuess = validate(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    guessInputLetters.value = "";
});

//Instructions: Create a function to check player's input.
const validate = function (input) {
    const acceptedLetter = /[a-zA-Z]/
    if (input.length ===0) {
        guessMessages.innerText = "Please enter a letter.";
    } else if (!input.match(acceptedLetter)) {
        guessMessages.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

// Instructions: Create a function to capture input.
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessLetter.includes(guess)) {
        guessMessages.innerText = "You already guessed that letter,silly. Try again.";
    } else {
        guessLetter.push(guess);
        console.log(guessLetter);
    }
};