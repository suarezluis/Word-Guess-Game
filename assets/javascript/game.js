var wordList = [
  "developer", 
  "website", 
  "computer", 
  "keyboard", 
  "monitor",
  "mouse"];
var word = pickWord();
var guessedWord = generateSpaces(word);
var letter = "";
var guessedList = [];
var tries = 7;
var won =0;
var lost = 0;
var games = 0;

document.getElementById("open").addEventListener("click", function(){ alert("Hello World!"); });

// Log initial stats
logStats();

document.getElementById("guess").innerHTML = (" " + guessedWord); 
document.getElementById("list").innerHTML = ("Pressed: " + guessedList + " ");

// listen for key up and send to function in lowercase
document.onkeyup = function(event) {
  letter = event.key.toLowerCase();
  
  

  // If letter is in word or list, do nothing, else update tries left
  if (isInWord(letter) || isInGuessedList(letter)) {
  } else {
    updateTries();
  }

  // If letter is in word add letter to guessed word 
  if (isInWord(letter)) {
    addToGuessedWord(letter);
  }

  // If letter is in guessed list, do nothing, else add to guessed list
  if (isInGuessedList(letter)) {
  } else {
    addToGuessedList(letter);
  }

  // If word = guessed word, update won and games then start new game
  if (guessedWord === word){
    word = pickWord();
    guessedWord = generateSpaces(word);
    letter = "";
    guessedList = [];
    tries = 7;
    won += 1;
    games += 1;
  }

  // If tries left = 0, update lost and games then start new game
  if (tries === 0){
    alert("You lost, the word was ''"+ word.toUpperCase() +"'' keep trying..");
    word = pickWord();
    guessedWord = generateSpaces(word);
    letter = "";
    guessedList = [];
    tries = 7;
    lost += 1;
    games += 1;
  }

  

  // Log stats and variable to the console
  logStats();

  // Update HTML content
  document.getElementById("won").innerHTML = ("" + won);  
  document.getElementById("lost").innerHTML = ("" + lost);  
  document.getElementById("games").innerHTML = ("" + games);
  document.getElementById("remaining").innerHTML = ("" + tries);  
  document.getElementById("list").innerHTML = ("Pressed: " + guessedList + " ");  
  document.getElementById("guess").innerHTML = (" " + guessedWord); 
  if(tries === 7){ document.getElementById("picture").src = "assets/images/7.png";}
  if(tries === 6){ document.getElementById("picture").src = "assets/images/6.png";}
  if(tries === 5){ document.getElementById("picture").src = "assets/images/5.png";}
  if(tries === 4){ document.getElementById("picture").src = "assets/images/4.png";}
  if(tries === 3){ document.getElementById("picture").src = "assets/images/3.png";}
  if(tries === 2){ document.getElementById("picture").src = "assets/images/2.png";}
  if(tries === 1){ document.getElementById("picture").src = "assets/images/1.png";}
  if(tries === 0){ document.getElementById("picture").src = "assets/images/0.png";}
};

// Pick a random word from wordList
function pickWord() {
  var index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

// Generate a string with underscores ie. "________"
function generateSpaces(string) {
  var spaces = "";
  for (let i = 0; i < string.length; i++) {
    spaces += "_";
  }
  return spaces;
}

function logStats() {
  console.clear();
  console.log("Letter pressed: " + letter);
  console.log("Secret word: " + word);
  console.log("Guessed list: " + guessedList);
  console.log("Guessed word: " + guessedWord);
  console.log("Tries left " + tries);
  console.log("Games won: " + won);
  console.log("Games lost: " + lost);
  console.log("Games total: " + games);
  console.log(`%c ~~~~~~~~~~~~~~~~~~~~~~~~~
| Did you lose something? |
 ~~~~~~~~~~~~~~~~~~~~~~~~~
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     || Made by Luis Suarez.`, "font-family:monospace");
}

// Check if letter is in word
function isInWord(letter) {
  if (word.indexOf(letter) < 0) {
    return false;
  } else {
    return true;
  }
}

// Check if letter is in list
function isInGuessedList(letter) {
  if (guessedList.indexOf(letter) < 0) {
    return false;
  } else {
    return true;
  }
}

// Add letter to guessed list
function addToGuessedList(letter) {
  guessedList.push(letter);
}

// Replace underscore with letter
function addToGuessedWord(letter) {
  guessedWord = guessedWord.split("");

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      guessedWord[i] = letter;
    }
  }

  guessedWord = guessedWord.join("");
}

// Reduce tries by 1
function updateTries(letter) {
  tries -= 1;
}
