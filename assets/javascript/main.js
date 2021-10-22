/*jshint esversion: 6 */

// To Hide Alert
$("#close-alert").click(function() {
    $(".alert").hide();
});

// To Prevent Users From Pasting Copied Word In Input Box
// Credit: Net-informations.com @ http://net-informations.com/jq/iq/cut.htm
$("#text-input").bind("copy paste cut", function(event) {
    event.preventDefault();
});

// ---------- Fancy Heading Display ----------
// Credit: Tobias Ahlin Bjerrome @ https://tobiasahlin.com/moving-letters/#3
const textWrapper = document.querySelector(".ml3");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>",
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".ml3 .letter",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 500,
        delay: (el, i) => 60 * (i + 1),
    })
    .add({
        targets: ".ml3",
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
    });
// ---------- /End of Fancy Heading Display ----------

// ---------- Speed Typing Game ----------
// Credit: Traversy Media @ https://www.youtube.com/watch?v=Yw-SYSG-028 *Refer to this tutorial but customised by me

// Global Valuables
let time = 60;
let gameScore = 0;
let highScore = 0;
highScore = localStorage.getItem("speedTypingHighScore");
$("#high-score").html(highScore);
let usedCountries = [];
let transferData;

//To Play The Game
$("#play-btn").click(function() {
    $("input").focus();
    $("#play-message").hide();
    $("#play-btn").css("color", "#ff6565").attr("disabled", "true"); // To prevent users from hitting it again as it causes problems
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
            $("input").attr("disabled", "true"); // To prevent users from typing words in it as it still increment scores
            $("#time-up").show();

            if (gameScore > highScore) {
                localStorage.setItem("speedTypingHighScore", gameScore);
            }

            highScore = localStorage.getItem("speedTypingHighScore");
            $("#high-score").html(highScore);

            setTimeout(function() {
                if (gameScore >= 250) {
                    $("#medal")
                        .css("color", "#e84610")
                        .html('Special <i class="fas fa-crown"></i>'); // Code Institute Colour Crown - Secret item for special people reaching that high score. This is a surprise and not written on the instructions
                    $("#message").css("color", "#e84610").html("Secret Crown");
                } else if (gameScore >= 230 && gameScore <= 240) {
                    $("#medal")
                        .css("color", "#d4af37")
                        .html('Gold <i class="fas fa-medal"></i>');
                    $("#message")
                        .css({
                            fontSize: "1.2rem",
                            color: "#007acc",
                            fontFamily: "Courgette, cursive",
                        })
                        .html(
                            "Great job! Try to reach 250 pt and see what happens...",
                        );
                } else if (gameScore >= 180 && gameScore <= 220) {
                    $("#medal")
                        .css("color", "#808080")
                        .html('Silver <i class="fas fa-medal"></i>');
                    $("#message").html("Well Done!!");
                } else {
                    $("#medal")
                        .css("color", "#b08d57")
                        .html('Bronze <i class="fas fa-medal"></i>');
                    $("#message").html("Unlucky!");
                }
            }, 1500);

            setTimeout(function() {
                if (gameScore >= 250) {
                    $("#country-text")
                        .css("color", "#e84610")
                        .html(
                            'Congratulation! <i class="fas fa-glass-cheers"></i>',
                        );
                    $("#reset-btn").show();
                    $("#reset-message").html(
                        'Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again',
                    );
                } else {
                    $("#country-text")
                        .css("color", "#007acc")
                        .html("Try Again!");
                    $("#reset-btn").show();
                    $("#reset-message").html(
                        'Click the <span class="bold">Reset <i class="far fa-registered"></i></span> button to play it again',
                    );
                }
            }, 2500);
        }
    }, 1000);
}

// To Show Countries
function showCountries(countries) {
    const randomIndex = Math.floor(Math.random() * countries.length);
    const textCountryName = countries[randomIndex].name;
    const letters = /^[a-zA-Z-,]+(\s?[a-zA-Z-, ])*$/;

    if (
        textCountryName.match(letters) &&
        !usedCountries.includes(textCountryName)
    ) {
        // To show countries with only alphabets (including space and comma) & not to repeat the countries already used in the game
        $("#country-text").html(textCountryName);
        usedCountries.push(textCountryName);
    } else {
        showCountries(countries);
    }
}

// To Check Current Word (Country) & Input Word Match
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

// To Reset The Game
$("#reset-btn").click(function() {
    location.reload();
});
// ---------- /End of Speed Typing Game ----------

// ---------- REST Countries API @ https://restcountries.eu/ ----------
// Credit: Coding Journey @ https://www.youtube.com/watch?v=THZyM2z8s-o *Refer to this tutorial but customised by me

// Global Valuables
let apiCountries;
let dropDownCountries;
let lat;
let lng;
let options;

// To Receive Countries Data From API
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        initialise(data);
        getCountries(data);
        $("#country-text").html("Ireland");
    } else {
        return "Error";
    }
};

// To Change Country Info Details
$("#list-of-countries").change(function(event) {
    displayCountryInfo(event.target.value);
});

// To Get Countries Data From API
function getCountries(getData) {
    transferData = getData;
    showCountries(transferData);
}

// To Show A List Of Countries In Dropdown Menu
function initialise(countriesData) {
    apiCountries = countriesData;
    dropDownCountries = "";

    for (let i = 0; i < apiCountries.length; i++) {
        dropDownCountries += `<option value="${apiCountries[i].alpha3Code}">${apiCountries[i].name}</option>`;
    }

    $("#list-of-countries").html(dropDownCountries);
    displayCountryInfo("IRL");
}

// To Show Country Info
function displayCountryInfo(countryByAlpha3Code) {
    const countryData = apiCountries.find(
        (country) => country.alpha3Code === countryByAlpha3Code,
    );
    $("#country-name").html(countryData.name);
    $("#flag").attr({
        src: countryData.flag,
        alt: `Flag of ${countryData.name}`,
    });
    $("#region").html(countryData.region);
    $("#capital").html(countryData.capital);
    $("#population").html(countryData.population.toLocaleString("en-US"));
    $("#language").html(
        `${countryData.languages
            .filter((l) => l.name)
            .map((l) => l.name)
            .join(", ")}`,
    );
    $("#wikipedia").attr({
        href: `https://en.wikipedia.org/wiki/${countryData.name}`,
    });

    //To Show Location On Google Maps
    lat = countryData.latlng[0];
    lng = countryData.latlng[1];
    setTimeout(function() {
        showCountryOnGoogleMaps(lat, lng);
    }, 0);
}
// ---------- /End of REST Countries API ----------

// To Show & Hide Country Info API Link
$(".fa-info-circle").click(function() {
    $("#country-info").toggle();
});

// ---------- Google Maps API ----------
function initMap() {
    options = {
        zoom: 4,
        center: {
            lat: 53,
            lng: -8,
        },
    };
    let map = new google.maps.Map($("#maps")[0], options);

    new google.maps.Marker({
        position: {
            lat: 53,
            lng: -8,
        },
        map: map,
    });
}

function showCountryOnGoogleMaps(lat, lng) {
    const id = $("#map");

    if (id) {
        options = {
            zoom: 4,
            center: {
                lat: lat,
                lng: lng,
            },
        };
        let map = new google.maps.Map($("#maps")[0], options);

        new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng,
            },
            map: map,
        });
    }
}
// ---------- /End of Google Maps API ----------