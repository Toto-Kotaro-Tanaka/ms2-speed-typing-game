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

// ---------- Codes for Speed Typing Game ----------
// Credit: Traversy Media @ https://www.youtube.com/watch?v=Yw-SYSG-028 *Referred this tutorial but customise some by me

// Global Valuables
let time = 10; //10s is just for testing - should be 60
let gameScore = 0;
let highestScore = 0;

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

//To Play The Game
$("#play-btn").click(function() {
  countdown();
  showText(texts);
  $("#text-input").on("input", startMatch);
});

//To Countdown Time
function countdown() {
  gameScore = 0;
  $("input").focus();
  const timer = setInterval(function() {
    //To Prevent Users Hitting It Again
    $("#play-btn").attr("disabled", "true");
    time--;
    $("#time").html(time);

    if (time === 0) {
      //To Prevent Users Typing Words In
      $("input").attr("disabled", "true");
      $("#time-up").html("Time is Up!");
      $("#country-text").html("Try Again!");
      $("#medal").html('Gold Medal <i class="fas fa-medal"></i>');
      $("#message").html("Well Done");
      clearInterval(timer);
      $("#play-btn").css("color", "#ff6565");
      $("#play-message").hide();
      $("#reset-btn").show();
      $("#reset-message").html('Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again')
    }
  }, 1000);
}

// To Show Typing Word
function showText(texts) {
  const randomIndex = Math.floor(Math.random() * texts.length);
  $("#country-text").html(texts[randomIndex]);
}

// To Check Current Word And Input Word Match
function matchWords() {
  if ($("#text-input").val() === $("#country-text").html()) {
    return true;
  } else {
    return false;
  }
}

// To Act When Words Match
function startMatch() {
  if (matchWords()) {
    showText(texts);
    gameScore += 10;
    $("#text-input").val("");
    $("#game-score").html(gameScore);
  }
}

$("#reset-btn").click(function() {
  location.reload();
});

// ---------- /Speed Typing Game ----------



