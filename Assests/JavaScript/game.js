//Create the Array of words    
var wordList = ["acres", "adult", "arrangement", "advice", "attempt", "border", "breeze", "brick", "calm", "canal", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", "damage", "deeply", "depth", "discussion", "doll", "donkey", "essential", "exchange", "exist", "explanation", "facing", "film", "finest", "fireplace", "floating", "folks", "fort", "gargae", "grabbed", "grandmother", "habit", "happily", "heading"];

//variables

var word = ""
var guessesLeft = "";
var userGuess = "";
var displayAnswer = [];
var incorrect_guess = [];
var win = 0;
var lose = 0;


startGame();

// function to start the game. Clears the variables and chooses a new word at random from the word array.
function startGame() {
    document.getElementById("message").innerHTML = "";
    guessesLeft = 10;
    incorrect_guess = [];
    word = randomWord();
    console.log(word)

    document.getElementById("guess_remain").innerHTML = guessesLeft;
    document.getElementById("incorrect_guess").innerHTML = incorrect_guess;
    userGuess = "";
    resetDisplay()
}

//Choosing the word from the array

function randomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

//resets the display and pushes the underscores to the answer array
function resetDisplay() {
    displayAnswer = [];
    document.getElementById("answer").innerHTML = "";

    for (var i = 0; i < word.length; i++) {
        displayAnswer.push("_");
        document.getElementById("answer").innerHTML = displayAnswer.join(" ");

    }
}

//calls the start game function when the user clicks the button
document.getElementById("startGame").addEventListener("click", startGame)

//captures the users guess 
document.addEventListener("keyup", function () {

    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess);
    var letterInWord = false;

    for (var k = 0; k < word.length; k++) {
        if (userGuess === word[k].toLowerCase()) {
            displayAnswer[k] = userGuess;
            letterInWord = true;
            document.getElementById("answer").innerHTML = displayAnswer.join(" ");
        }
    }
    //if the letter is not in the word
    if (!letterInWord) {

        //add validation to see if the user has already guessed that letter. If so, it will not take a guess or push to the incorrect guess array
        if (incorrect_guess.includes(userGuess)) {
            console.log("Already Guessed")
            // removes a guess     
        } else {
            guessesLeft--;
            //checks to see if there are guesses left. If there are then it will push the incorrect guess to the array.    
            if (guessesLeft > 0) {
                incorrect_guess.push(userGuess);
                document.getElementById("incorrect_guess").innerHTML = incorrect_guess.join(", ");
                document.getElementById("guess_remain").innerHTML = guessesLeft;
                //if there are no guesses left then the game is over and the "you lost" message is displayed        
            } else {
                document.getElementById("message").innerHTML = "You Lost! The word was '" + word + "'. Better luck next time!";
                document.getElementById("guess_remain").innerHTML = guessesLeft;
                lose++;
                document.getElementById("lose").innerHTML = lose;
            }
        }
//checks for a win by seeing if the display answer still includes an underscore
    } else {
        if (!displayAnswer.includes("_")) {
            document.getElementById("message").innerHTML = "You Won!";
            win++;
            document.getElementById("win").innerHTML = win;
        }
    }


})




