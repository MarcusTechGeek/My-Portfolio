let name = prompt("What's your name?");

if (name === null || name.trim() === "") {// use trim to check for empty spaces and null for no valeu
    alert("You need to enter a valid name, please refresh the page and try again.");
} else {
    alert("Hello " + name);

    let words = ["javascript", "monkey", "amazing", "pancake", "banana", "strawberry", "apple", "green"];
    
    let word = words[Math.floor(Math.random() * words.length)];
    
    let geuss = word.length;
    let tries = word.length;
    let arransleng = [];
    let correctGuesses = [];

    for (let i = 0; i < word.length; i++) {
        arransleng[i] = "_";
    }

    let awnser;

    while (geuss > 0 && tries > 0) { //run the loop while geuss and tries are both bigger than 0
        alert("Your progress is: " + arransleng.join(" ") + " you have " + geuss + " letters left and " + tries + " tries left");
        
        awnser = prompt("what letter do you want to guess? or press cancel to quit game.");

        if (awnser === null) {
            break;
        } else if (awnser.length > 1) {
            alert("Please enter a single letter!");
            tries--;
        } else {
            let awnser1 = awnser.toLowerCase();

            if (correctGuesses.includes(awnser1)) { // use includes to check if awnser1's value is in the stored correct geusses
                alert("Do not duplicate characters");
                tries--;
            } else {
                let correctGuess = false;//create a boolean to test for a true or false

                for (let j = 0; j < word.length; j++) {
                    if (awnser1 === word[j]) {
                        arransleng[j] = awnser1;
                        geuss--;
                        correctGuess = true; //if correct the value will change to true
                        correctGuesses.push(awnser1); //if the boolean is true the value gets stored in correctgeusses array
                    }
                }

                if (!correctGuess) {//decreases the tries value everytime the awsner is wrong
                    tries--;
                } 
            }
        }
    }

    if (geuss === 0) {
        alert("Well done! Your answer was: " + word);
    } else if (awnser === null) {
        alert("Thank you for playing " + name + ". The answer was " + word);
    } else {
        alert("You have reached your try limit. The word was " + word);
    }
}

