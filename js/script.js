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
const word = magnolia

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
// Instructions: In the callback function, add a parameter for the event: e.
// Instructions: Prevent the default behavior of clicking a button, the form submitting, 
// Instructions: and then reloading the page. Create and name a variable to capture the value of the input.
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = guessInputLetters.value;
    console.log(guess);
    guessInputLetters.value = "";
});