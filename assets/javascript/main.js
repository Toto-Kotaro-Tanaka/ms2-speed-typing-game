// To Hide Alert
$("#close-alert").click(function() {
  $(".alert").hide();
});

// ---------- Fancy Heading Display ----------
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
// ---------- /End of Fancy Heading Display ----------

// ---------- Codes for Speed Typing Game ----------
// Credit: Traversy Media @ https://www.youtube.com/watch?v=Yw-SYSG-028 *Referred this tutorial but customise some by me

// Global Valuables
let time = 5; //10s is just for testing - should be 60
let gameScore = 0;
let highScore = 0;
highScore = localStorage.getItem("speedTypingHighScore");

$("#high-score").html(highScore);


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
    $("#play-message").hide();
    $("#play-btn").css("color", "#ff6565");
    $("#play-btn").attr("disabled", "true");
    time--;
    $("#time").html(time);

    if (time === 0) {
      clearInterval(timer);
      //To Prevent Users Typing Words In
      $("input").attr("disabled", "true");
      $("#time-up").html("Time is Up!");
      $("#country-text").html("Try Again!");
      $("#medal").html('Gold Medal <i class="fas fa-medal"></i>');
      $("#message").html("Well Done");
      $("#play-message").hide();
      $("#reset-btn").show();
      $("#reset-message").html('Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again');

      if (gameScore >= 460) {
        $("#medal").css("color", "#e84610");
        $("#medal").html('CI <i class="fas fa-medal"></i>');
        $("#message").html("Secret Medal");
      } else if (gameScore >= 400 && gameScore < 460) {
        $("#medal").css("color", "#d4af37");
        $("#medal").html('Gold <i class="fas fa-medal"></i>');
        $("#message").html("Perfect!!!");
      } else if (gameScore >= 300 && gameScore < 400) {
        $("#medal").css("color", "#808080");
        $("#medal").html('Silver <i class="fas fa-medal"></i>');
        $("#message").html("Well Done!!");
      } else {
        $("#medal").css("color", "#b08d57");
        $("#medal").html('Bronze <i class="fas fa-medal"></i>');
        $("#message").html("Unlucky!");
      }

      if (gameScore > highScore) {
        localStorage.setItem("speedTypingHighScore", gameScore);
      }

      highScore = localStorage.getItem("speedTypingHighScore");
      $("#high-score").html(highScore);
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
    gameScore += 450;
    $("#text-input").val("");
    $("#game-score").html(gameScore);
  }
}

$("#reset-btn").click(function() {
  location.reload();
});
// ---------- /End of Speed Typing Game ----------



