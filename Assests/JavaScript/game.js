//Create the Array of words    
var wordList = ["acres", "adult", "arrangement", "advice", "attempt", "border", "breeze", "brick", "calm", "canal", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", "damage", "deeply", "depth", "discussion", "doll", "donkey", "essential", "exchange", "exist", "explanation", "facing", "film", "finest", "fireplace", "floating", "folks", "fort", "gargae", "grabbed", "grandmother", "habit", "happily", "heading"];

//variables

var word = ""
var guessesLeft = "";
var userGuess = "";
var displayAnswer = [];
var incorrect_guess = [];

// function to start the game. Clears the variables and chooses a new word at random from the word array.
startGame();
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

    if (!letterInWord) {
        if (incorrect_guess.includes(userGuess)) {
            console.log("Already Guessed")
        } else {
            guessesLeft--;
            if(guessesLeft > 0){
                incorrect_guess.push(userGuess);
                document.getElementById("incorrect_guess").innerHTML = incorrect_guess.join(", ");
                document.getElementById("guess_remain").innerHTML = guessesLeft;
            } else {
                document.getElementById("message").innerHTML = "You Lost!";
                document.getElementById("guess_remain").innerHTML = guessesLeft;
            }
        }

    } else {
        if(!displayAnswer.includes("_")){
            document.getElementById("message").innerHTML = "You Won!";
        }
    }


})




