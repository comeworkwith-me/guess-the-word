// Instruction: Create global variables to select specific HTML elements.
// Solution: Use "document.querySelector" to select the elements.

const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessInputLetters = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const guessMessages = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

// Instructions: Create global variables to managage words and guesses.
let word = "magnolia";
const guessedLetter = [];
let remainingGuess = 8;


const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);
  };
  
  // Fire off the game
  getWord();
  

// Instructions: Write a function to add placeholders for each letter.
const placeholder = function (word) {
    const letters = [];
    for (const letter of word) {
        console.log(letter);
        letters.push("●");
    }
    wordProgress.innerText = letters.join("");
};


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
    } else if (input.length > 1) {
        guessMessages.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        guessMessages.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

// Instructions: Create a function to capture input.
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetter.includes(guess)) {
        guessMessages.innerText = "You already guessed that letter,silly. Try again.";
    } else {
        guessedLetter.push(guess);
        console.log(guessedLetter);
        updateRemainingGuesses(guess)
        madeGuesses();
        wordInProgress(guessedLetter);
    }
};

// Instructions: Create a function to show guessed letters.
const madeGuesses = function () {
    guessedLetters.innerHTML = "";
    for (const letter of guessedLetter) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLetters.append(li);
    }
};

// Instructions: Create a function to update the word in progress.
const wordInProgress = function (guessedLetter) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetter.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }

    wordProgress.innerText = revealWord.join("");
    checkWin();
};

//Instructions: Create a function to count the remaining guesses.
const updateRemainingGuesses = function (guess) {
    const upperWord = word.toUpperCase();
    if (!upperWord.includes(guess)) {
        guessMessages.innerText = `Sorry, the word has no ${guess}.`;
        remainingGuess -= 1;
    } else {
        guessMessages.innerText = `Good guess! The word has the letter ${guess}.`;
    }

    if (remainingGuess === 0) {
        guessMessages.innerHTML = `Game over! The word was <span class="highlight">${word}</span>.`;
    } else if(remainingGuess === 1) {
        remainingGuessSpan.innerText = `${remainingGuess} guess`;
    } else {
        remainingGuessSpan.innerText = `${remainingGuess} guesses`;
    }

};

// Instructions: Create a function to check if a player won.
const checkWin = function () {
    if (word.toUpperCase() === wordProgress.innerText) {
        guessMessages.classList.add("win");
        guessMessages.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};
