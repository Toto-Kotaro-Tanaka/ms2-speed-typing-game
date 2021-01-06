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

// ---------- Speed Typing Game ----------
// Credit: Traversy Media @ https://www.youtube.com/watch?v=Yw-SYSG-028 *Referred this tutorial but customised by me

// Global Valuables
let time = 60;
let gameScore = 0;
let highScore = 0;
highScore = localStorage.getItem("speedTypingHighScore");
$("#high-score").html(highScore);

//To Play The Game
$("#play-btn").click(function() {
  $("input").focus();
  $("#play-message").hide();
  $("#play-btn").css("color", "#ff6565");
  $("#play-btn").attr("disabled", "true"); // To Prevent Users Hitting It Again As It Causes Problems
  countdown();
  showCountries(transferData);
  $("#text-input").on("input", startMatch);
});

//To Countdown Time
function countdown() {
  gameScore = 0;
  const timer = setInterval(function() {
    time--;
    $("#time").html(time);

    if (time === 0) {
      clearInterval(timer);
      $("input").attr("disabled", "true"); // To Prevent Users Typing Words In It As It Would Still Count Scores
      $("#time-up").html("Time is Up!");

      if (gameScore > highScore) {
        localStorage.setItem("speedTypingHighScore", gameScore);
      }

      highScore = localStorage.getItem("speedTypingHighScore");
      $("#high-score").html(highScore);

      setTimeout(function() {
        if (gameScore >= 250) {
          $("#medal").css("color", "#e84610");
          $("#medal").html('Special <i class="fas fa-crown"></i>'); // Code Institute Colour Crown - secret item for special people reaching that high score. This is a surprise and not written on the instructions
          $("#message").css("color", "#e84610");
          $("#message").html("Secret Crown");  
        } else if (gameScore >= 230 && gameScore <= 240) {
          $("#medal").css("color", "#d4af37");
          $("#medal").html('Gold <i class="fas fa-medal"></i>');
          $("#message").css("fontSize", "1.2rem").css("color", "#007acc").css("fontFamily", "Courgette, cursive");
          $("#message").html("Great job! Try to reach 250 pt and see what happens...");
        } else if (gameScore >= 180 && gameScore <= 220) {
          $("#medal").css("color", "#808080");
          $("#medal").html('Silver <i class="fas fa-medal"></i>');
          $("#message").html("Well Done!!");
        } else {
          $("#medal").css("color", "#b08d57");
          $("#medal").html('Bronze <i class="fas fa-medal"></i>');
          $("#message").html("Unlucky!");
        }  
      }, 1500);

      setTimeout(function() {
        if (gameScore <= 240) {
          $("#country-text").css("color", "#007acc")
          $("#country-text").html("Try Again!");
          $("#reset-btn").show();
          $("#reset-message").html('Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again');    
        } else {
          $("#country-text").css("color", "#e84610")
          $("#country-text").html('Congratulation! <i class="fas fa-glass-cheers"></i>');
          $("#reset-btn").show();
          $("#reset-message").html('Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again');    
        }
      }, 2500);
    }
  }, 1000);
}

// To Show Countries
function showCountries(countries) {
  const randomIndex = Math.floor(Math.random() * countries.length);
  let textCountryName = countries[randomIndex].name;
  let textCountryLength = textCountryName.length;
  const letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

  if (textCountryName.match(letters)) { // To Show Countries With Only Alphabets (Including Space) 
    $("#country-text").html(countries[randomIndex].name);
  } else {
    showCountries(countries);
  }
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
    showCountries(transferData);
    gameScore += 10;
    $("#text-input").val("");
    $("#game-score").html(gameScore);
  }
}

$("#reset-btn").click(function() {
  location.reload();
});
// ---------- /End of Speed Typing Game ----------

// ---------- REST Countries API ----------
// Credit: Coding Journey @ https://www.youtube.com/watch?v=THZyM2z8s-o *Referred this tutorial but customised by me
// API: REST Countries @ https://restcountries.eu/

// Global Valuables
let apiCountries;

// To Change Country Info Details
$("#list-of-countries").change(function(event) {
  displayCountryInfo(event.target.value);
});

// To Receive Countries Data From API  
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();

xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let data = JSON.parse(this.responseText);
    initialise(data);
    getCountries(data);
    $("#country-text").html("Ireland");
  } else {
    return "Error";
  }
}

// To Get Countries From API
function getCountries(getData) {
  transferData = getData;
  showCountries(transferData);
}

// To Show A List Of Countries In Dropdown Menu
function initialise(countriesData) {
  apiCountries = countriesData;
  let options = "";
  for (let i = 0; i < apiCountries.length; i++) {
    options += `<option value="${apiCountries[i].alpha3Code}">${apiCountries[i].name}</option>`;
  }
  $("#list-of-countries").html(options);
  displayCountryInfo("IRL");
}

// To Show Country Info
function displayCountryInfo(countryByAlpha3Code) {
  const countryData = apiCountries.find(country => country.alpha3Code === countryByAlpha3Code); // Array.prototype.find() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  $("#country").html(countryData.name);
  $("#flag").attr("src", countryData.flag);
  $("#flag").attr("alt", `Flag of ${countryData.name}`);
  $("#region").html(countryData.region);
  $("#capital").html(countryData.capital);
  $("#population").html(countryData.population.toLocaleString("en-US"));
  $("#language").html(`${countryData.languages.filter(l => l.name).map(l => l.name).join(", ")}`);

  //Google Maps
  lat = countryData.latlng[0];
  lng = countryData.latlng[1];
  setTimeout(function() {
    initMap(lat, lng);
  }, 0);
}
// ---------- /End of Countries API ----------

// To Show & Hide Countries Info API Link
  $(".fa-info-circle").click(function(){
    $("#country-info").toggle();
  });

// ---------- Google Maps API ----------
function initMap(lat, lng) {
  let options = {
    zoom: 4,
    center: {
      lat: (lat),
      lng: (lng)
    }
  }
  const map = new google.maps.Map($("#maps")[0], options);

  let marker = new google.maps.Marker({
    position: {
      lat: (lat),
      lng: (lng)
    }, map: map
  });
}