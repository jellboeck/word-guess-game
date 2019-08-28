
//Create the Array of words    
var wordList = ["acres", "adult" , "arrangement" , "advice" , "attempt" , "border" , "breeze" , "brick" , "calm" , "canal", "cast", "chose" , "claws", "coach", "constantly" , "contrast" , "cookies" , "customs", "damage" ,"deeply", "depth", "discussion", "doll", "donkey", "essential" ,"exchange" ,"exist", "explanation", "facing" , "film", "finest", "fireplace", "floating" ,"folks", "fort", "gargae", "grabbed","grandmother","habit", "happily", "heading"];
//Choosing the word from the array
var word = wordList[Math.floor(Math.random() * wordList.length)];

//variables
var length = word.length;
var displayLength = [length]
var guessesLeft = 10;
var userGuess = "";
var displayAnswer = [];
var incorrect_guess = [];
var wordArray = word.split("");
var lettersRemain= displayLength;
var letterInWord ="";


console.log(word)
console.log(length);
// console.log(wordArray);

// function to start the game. Clears the variables and chooses a new word at random from the word array.

function startGame () {
    guessesLeft = 10;
    incorrect_guess = [];
    userGuess= "";
    displayAnswer=[];
     
    }

document.getElementById("answer").innerHTML = displayAnswer;
console.log(displayAnswer)
document.getElementById("guess_remain").innerHTML = guessesLeft;
document.getElementById("incorrect_guess").innerHTML = incorrect_guess;




//user presses key and their guess is captured

function submit(){

    // loop displays the answer as underscores
    
    for ( var i = 0; i <  wordArray.length;  i++) {
        displayAnswer.push("_ ");

 
    }
}
    
function checkLetter() {

        // if (userGuess == wordArray)  {


            document.addEventListener("keyup", function() {

                var userGuess = event.key;
                console.log(userGuess);

                for (var k = 0 ; k < word.length; k++){
                    if (userGuess === word[k])
                    displayAnswer[k] = userGuess;
                    console.log(word[k]);
                    document.getElementById("answer").innerHTML = displayAnswer.join(" ");
    
                        }
            
               
                 
                    }) 
         
                }

                // document.getElementById("incorrect_guess").innerHTML = incorrect_guess;   
                // document.getElementById("guess_remain").innerHTML = guessesLeft; 
            
       
           submit()
           checkLetter()


          

        // else {
        //     guessesLeft--;
        //     wordArray[k]= userGuess;
        //     incorrect_guess.push(userGuess);
           
        // }    

  


       

