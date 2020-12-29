// $(window).on("load", init);

// To Hide Alert
$("#close-alert").click(function() {
  $(".alert").hide();
});

// Fancy Heading Display
// Credit: Tobias Ahlin Bjerrome @ https://tobiasahlin.com/moving-letters/#3
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 500,
    delay: (el, i) => 60 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Codes for Speed Typing Game
// Credit: Traversy Media @ https://www.youtube.com/watch?v=Yw-SYSG-028 *Referred this tutorial but customise some by me

// Global Valuables
let time = 60;
let gameScore = 0;
let highestScore = 0;
let isPlaying;

// This will be replaced by Countries API
const texts = [
  'Galway',
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

// To Initialise Game
function startGame() {
  // To Load Text From Array
  showText(texts);
  // To Start Matching On Text Input
  $("#text-input").on("input", startMatch);
  // To Call Countdown
  setInterval(countdown, 1000);
  // To Check Game Status
  setInterval(checkStatus, 50);
}

// To Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    showText(texts);
    gameScore += 10;
    $("#text-input").val("");
    $("#game-score").html(gameScore);
  } 
}

// To Match Current Word to Text Input
function matchWords() {
  if ($("#text-input").val() === $("#country-text").html()) {
    return true;
  } else {
    return false;
  }
}

// To Pick & Show Random Text
function showText(texts) {
  // To Generate Random Array Index
  const randomIndex = Math.floor(Math.random() * texts.length);
  // To Output Randome Text
  $("#country-text").html(texts[randomIndex]);
}

// To Countdown Time
function countdown() {
  if (time > 0) {
    time--;
  } else if(time === 0) {
    isPlaying = false;
  }
  // To Show Countdown Time
  $("#time").html(time);
}

// To Check Game Status
function checkStatus() {
  if (!isPlaying && time === 0) {
    $("#time-up").html("Time is Up!");
  }
}

// ---------- /Speed Typing Game ----------



