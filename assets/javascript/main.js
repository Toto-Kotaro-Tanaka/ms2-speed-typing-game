window.addEventListener("load", init);

// To hide alert
$("#close-alert").click(function() {
  $(".alert").hide();
});

// Codes for Speed Typing Game
// Credit: Traversy Media @ https://www.youtube.com/watch?v=Yw-SYSG-028 *Referred this tutorial but customise some by me
let time = 20;
let gameScore = 0;
let isPlaying;

const wordInput = document.querySelector("#text-input");
const currentWord = document.querySelector("#country-text");
const scoreDisplay = document.querySelector("#game-score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#time-up");

const words = [
  'Ireland',
  'Desk',
  'Chair',
  'Computer',
  'House',
  'Car',
  'Hero',
  'Keyboard',
  'Piano',
  'Football',
  'JavaScript'
]

// Initialize Game
function init() {
  // Load text from array
  showWord(words);
  // Start Matching On Text Input
  wordInput.addEventListener("input", startMatch);
  // Call countdown
  setInterval(countdown, 1000);
  // Check Game Status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {

    isPlaying = true;
    showWord(words);
    wordInput.value = "";
    gameScore += 10;
    console.log("MATCH!");
    // // console.log(wordInput);
    // console.log(wordInput.value);
    // console.log(currentWord.innerHTML);
    // // console.log($("#country-text"));
  } else {
    console.log("false");
    scoreDisplay.innerHTML = gameScore;
  }
}

// Match Current Word to Text Input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTMT = "Correct";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick & Show Random Text
function showWord(words) {
  // Generate Random Array Index
  const randomIndex = Math.floor(Math.random() * words.length);
  // Output Randome Text
  currentWord.innerHTML = words[randomIndex];
}

// Countdwon Timer
function countdown() {
  if (time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  }
  // Show Countdown Time
  timeDisplay.innerHTML = time;
}

// Check Game Status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Time is Up!";
  }
}