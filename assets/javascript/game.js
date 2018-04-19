var wordList = ["developer"];
var word = pickWord();
var guessedWord = generateSpaces(word);
var letter = "";
var guessedList = [];
var tries = 7;
var won =0;
var lost = 0;
var games = 0;

logStats();
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
