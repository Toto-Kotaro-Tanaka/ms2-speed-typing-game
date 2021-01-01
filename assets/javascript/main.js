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
const countries = [
  'Canada',
  'Australia',
  'NewZealand',
  'Japan',
  'United States',
  'France',
  'Nigeria',
  'Brazil',
  'China',
  'Germany',
  'South Africa',
  'Mexico',
  'Wales',
  'Argentina',
  'Saudi Arabia'
]

//To Play The Game
$("#play-btn").click(function() {
  countdown();
  showCountries(countries);
  $("#text-input").on("input", startMatch);
});

//To Countdown Time
function countdown() {
  gameScore = 0;
  $("input").focus();
  const timer = setInterval(function() {
    $("#play-message").hide();
    $("#play-btn").css("color", "#ff6565");
    $("#play-btn").attr("disabled", "true"); // To Prevent Users Hitting It Again
    time--;
    $("#time").html(time);

    if (time === 0) {
      clearInterval(timer);
      $("input").attr("disabled", "true"); // To Prevent Users Typing Words In
      $("#time-up").html("Time is Up!");
      $("#country-text").css("color", "#007acc")
      $("#country-text").html("Try Again!");
      $("#play-message").hide();
      $("#reset-btn").show();
      $("#reset-message").html('Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again');

      if (gameScore >= 350) {
        $("#medal").css("color", "#e84610");
        $("#medal").html('Special <i class="fas fa-crown"></i>'); // Code Institute Colour Crown - secret item for special people reaching that high score. This is a surprise and not written on the instructions
        $("#message").css("color", "#e84610");
        $("#message").html("Secret Crown");  
      } else if (gameScore >= 300 && gameScore <= 340) {
        $("#medal").css("color", "#d4af37");
        $("#medal").html('Gold <i class="fas fa-medal"></i>');
        $("#message").css("fontSize", "1.2rem").css("color", "#007acc").css("fontFamily", "Courgette, cursive");
        $("#message").html("Great job! Try to reach 350 pt and see what happens...");
      } else if (gameScore >= 250 && gameScore <= 290) {
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

// To Show Countries
function showCountries(countries) {
  const randomIndex = Math.floor(Math.random() * countries.length);
  $("#country-text").html(countries[randomIndex]);
}

// To Check Current Word (Country) And Input Word Match
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
    showCountries(countries);
    gameScore += 10;
    $("#text-input").val("");
    $("#game-score").html(gameScore);
  }
}

$("#reset-btn").click(function() {
  location.reload();
});
// ---------- /End of Speed Typing Game ----------



