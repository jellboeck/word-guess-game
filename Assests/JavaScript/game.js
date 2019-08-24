//Variables

//Create the Array of words

var wordList = ["acres", "adult" , "arrangement" , "advice" , "attempt" , "August" , "Autumn" , "border" , "breeze" , "brick" , "calm" , "canal", "cast", "chose" , "claws", "coach", "constantly" , "contrast" , "cookies" , "customs", "damage" ,"deeply", "depth", "discussion", "doll", "donkey", "Egypt", "essential" ];

//Choosing the word from the array

var word = wordList[Math.floor(Math.random() * wordList.length)];

var length = word.length;
var displayLength = [length]
var guessesLeft = 10;
var userGuess = "";
var displayAnswer = [];

console.log(word)
console.log(length);

//Create the underscores based on the length of the words

for ( var i = 0; i <  word.length;  i++) {
    displayLength[i] = "_ ";
    displayAnswer= displayAnswer + displayLength[i];
}

console.log(displayAnswer)






// //on click event to start the game

// $(".start_btn").on("click", function() {


    
// });



