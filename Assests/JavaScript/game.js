
$(document).ready(function() {

//Create the Array of words    
var wordList = ["acres", "adult" , "arrangement" , "advice" , "attempt" , "August" , "Autumn" , "border" , "breeze" , "brick" , "calm" , "canal", "cast", "chose" , "claws", "coach", "constantly" , "contrast" , "cookies" , "customs", "damage" ,"deeply", "depth", "discussion", "doll", "donkey", "Egypt", "essential" ,"exchange" ,"exist", "explanation", "facing" , "film", "finest", "fireplace", "floating" ,"folks", "fort", "gargae", "grabbed","grandmother","habit", "happily", "heading"];

//Choosing the word from the array
var word = wordList[Math.floor(Math.random() * wordList.length)];

//Variables

var length = word.length;
var displayLength = [length]
var guessesLeft = 10;
var userGuess = "";
var displayAnswer = [];
var incorrect_guess = [];
var wordArray = word.split("");


console.log(word)
console.log(length);

//Create the underscores based on the length of the words

// $(".start_btn").on("click", function() {

for ( var i = 0; i <  word.length;  i++) {
    displayLength[i] = "_ ";
    displayAnswer= displayAnswer + displayLength[i];

}
document.getElementById("answer").innerHTML = displayAnswer;
console.log(displayAnswer)

});

//user presses key 

document.addEventListener("keyup", function() {

    var userGuess = event.key;
    
    console.log(userGuess);

//their guess is compared to the answer

    if(userGuess.indexOf(wordArray) > -1){
        console.log(true);

   
};

});

