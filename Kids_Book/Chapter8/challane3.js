let words = ["javascript", "monkey", "amazing", "pancake", "banana", "strawberry", "apple", "green"];
let word;
let geuss;
let tries;
let answerArray;
let correctGuesses;
let awnser;

let name = prompt("What's your name?");

if (name === null || name.trim() === "") {
    alert("You need to enter a valid name, please refresh the page and try again.");
} else {
    alert("Hello " + name);

    word = pickWord();
    geuss = word.length;
    tries = word.length;
    answerArray = [];
    correctGuesses = [];

    awnserArray(); 

    while (geuss > 0 && tries > 0) {//this while loop runs all the functions
        showProgress();
        awnser = getGuess();

        if (awnser === null) {
            break;
        } else if (awnser.length > 1) {
            alert("Please enter a single letter!");
            tries--;
        } else {
            updateGameState();
        }
    }

    showAnswerAndCongratulatePlayer();
}

function pickWord() {
    return words[Math.floor(Math.random() * words.length)]; //chooses a random word out of array
}

function awnserArray() { 
    for (let i = 0; i < word.length; i++) { // creates blank spaces with the length of the word using _ _ _ _
        answerArray[i] = "_";
    }
}

function showProgress() { // updates the player on his/her progress in game
    alert("Your progress is: " + answerArray.join(" ") + " you have " + geuss + " letters left and " + tries + " tries left");
}

function getGuess() { //gathers the geuss from the playes or let's player leave game
    return prompt("what letter do you want to guess? or press cancel to quit the game.");
}

function updateGameState() {
    let awnser1 = awnser.toLowerCase();

    if (correctGuesses.includes(awnser1)) {
        alert("Do not duplicate characters");
        tries--;
    } else {
        let correctGuess = false;

        for (let j = 0; j < word.length; j++) {
            if (awnser1 === word[j]) {
                answerArray[j] = awnser1;
                geuss--;
                correctGuess = true;
                correctGuesses.push(awnser1);
            }
        }

        if (!correctGuess) {
            tries--;
        }
    }
}
nav
function showAnswerAndCongratulatePlayer() {
    if (geuss === 0) {
        alert("Well done! Your answer was: " + word);
    } else if (awnser === null) {
        alert("Thank you for playing " + name + ". The answer was " + word);
    } else {
        alert("You have reached your try limit. The word was " + word);
    }
}
