![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/logo/readme-logo.png)

# SPEED TYPING
This is a website of a speed typing game with an additional function that users can learn about basic information of the countries. I create this for **Milestone Project 2 (Interactive Frontend Development), Full Stack Software Development in [Code Institute](https://codeinstitute.net/)**.  

It is a mobile responsive website however the speed typing game can be played on laptop / desktop only as a keyboard is required. The link of website is available on HERE (My note: attach a link of the website here)

----- Mockup goes in here when the website is completed -----

## TABLE OF CONTENTS
* #### WHO'S THIS WEBSITE FOR?
* #### WHO IS THE OWNER?
* #### UX 5 PLANES
  * ##### Strategy Plane
  * ##### Scope Plane
  * ##### Structure Plane
  * ##### Skeleton Plane
  * ##### Surface Plane
* #### FEATURES
* #### TECHNOLOGIES USED
* #### RESOURCES
  * ##### General Resources
  * ##### Tools
* #### TESTING
  * ##### Html
  * ##### Css
  * ##### JavaScript
* #### PROJECT BARRIERS & SOLUTIONS
* #### VERSION CONTROL
* #### DEPLOYMENT
* #### CREDITS
  * ##### Code
  * ##### Contents
  * ##### Media
* #### ACKNOWLEDGEMENTS

## WHO'S THIS WEBSITE FOR?
People who would like to practice typing by playing a game. I use names of the countries in the world for this so they might come across the countries that they might be interested in or never heard of. In case they would like to check what those countries are like, there is a **“Learn About The Countries In The World”** section to provide basic information of each country, such as a location on the google maps, capital city, population, language and a flag.

## WHO IS THE OWNER?
I am the owner of the website. My goals of this website are to provide a speed typing game that users can practice typing with fun as well as to provide basic information of countries that they see in the game.

## UX 5 PLANES
### Strategy Plane
Users are people who would like to practice speed typing. By creating a website as a type of gaming website, they can practice while they are having fun. By setting a time (My note: 60s / 30s - TBC) and score, that increments by 10 rather than 1 so that they feel they achieved better (e.g. When you get 20 correct typings, it shows 200 instead of 20), users know what their current typing skill is and can compare in 1 week - 1 month time how they improved.
The highest score remains during the game so that users can try to achieve more points and give them a motivation to continue the game more times. A name of countries is used as a text, that they type, and it comes up randomly so that different combination of texts appear on each game. There are 195 countries in the world*. Users know some countries quite well, some only little and some not at all. In case users come across the countries that they are interested in, there is a section of **“Learn About The Countries In The World”** on a different page that provides basic information of each country, such as a location on the google maps, capital city, population, language and a flag, as an addition function to the speed typing game. 

*As of 20 Dec 2020 and referenced by **[worldometers](https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/)**

The main aims for this website are;

- To give users an opportunity to practice speed typing with fun. In order to achieve this, the visual and functions are kept minimum. There is a logo, title, navebar to *Home*, *Instructions* and *Countries* on the header. On the main section, there is a welcome message, game instructions button, a timer (My note: 60s / 30s TBC), a letter display, input box, score board, the highest score board and a button to “Learn About The Countries In The World” page.
To give users more motivation, each correct point is set to 10 instead of 1 so that they fee they’ve achieved better.
There are also 3 different categories at the end of the game. Depending on the score, they get a Gold medal, a Silver medal or a Bronze medal (My note: Scores for this TBC)

- To provide basic information of countries in the world 
In order to achieve this, Countries API (My note: TBC) is linked with google maps and capital city, population, language and a flag are generated from API.

All the functions on the tables below are minimum functions that must be implemented in the website to achieve user's and owner's goals.  

| Opportunity                                            | Importance | Viability / Feasibility |
| :----------------------------------------------------- | :--------: | :---------------------: |
| Game Instructions in Modal                             |     5      |            5            |
| A Timer                                                |     5      |            5            |
| A Random Text                                          |     5      |            5            |
| Score Board                                            |     5      |            5            |
| API with Google Maps                                   |     5      |            5            |
| Google Maps                                            |     5      |            5            |
| Info Card for Countries                                |     5      |            5            |
| The Highest Score Board                                |     4      |            5            |
| Fancy Opening When The Page Loads                      |     3      |            4            |
| Responsiveness                                         |     3      |            4            |

These are the additional functions that can improve the website however not mandatory to achieve user's and owner's goals currently set up. Some aren't implemented due to a lack of my current skills and knowledges and some due to lack of time. 

| Opportunity                                            | Importance | Viability / Feasibility |
| :----------------------------------------------------- | :--------: | :---------------------: |
| Different Levels (e.g. length of letters)              |     3      |            2            |
| Keeping The Highest Score Even Game Disconnected       |     3      |            2            |
| User Name Input                                        |     2      |            4            |
| Highlighting Letters When Correct / Incorrect          |     2      |            2            |
| Counting Down Last 10 Seconds                          |     2      |            1            |

### Scope Plane
Features to be included on this project are;
- Game instructions on modal (to keep the number of pages minimum)
- Timer 
- Randomly selected letters (country names) when the game starts
- Counting score 
- Keeping the highest score
- Displaying customised / interactive message (e.g. The results of the game, details of the countries)
- Google maps with API
- Country information with API
- Caution message in modal when the size goes below 960px as the game is available on desktop only

### Structure Plane
The website consists of 2 pages.
- First page (index.html) is **Speed Typing** game page with a logo, title, navbar, timer, letter display, input, , score, the highest score and instruction.
- Second Page is (countries.html) is **“Learn About The Countries In The World”** page. The same header as the first page applies and 26 alphabets with a list of countries for country information and location on google maps.

### Skeleton Plane
Desktop first design, though it is also responsive website. The Speed Typing game is only available on desktop but countries information is available on mobile size as well. There are wireframes of Main page(index.html) and Countries page(countries.html) for desktop and mobile sizes.

* [Wireframes: Home](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-index-html.png)
* ~[Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-countries-html.png)~
* [Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-countries-html-2.png) *This is the revised version after looking for some better ideas showing the country details

### Surface Plane
**--- Colour ---**
On "Speed Typing" page (index.html), a page which looks similar to Visual Studio Code is considered because main purpose of the website is for typing. Eerie Black (#1e1e1e) is used for the back ground colour and Bright Navy Blue (#007acc) is used for the logo and menu.
Main text colour is Light Grey (#d4d4d4) so that it doesn't give users too much contrast between the text and back ground colours. 
Canary(#ffff98) is used for score to stands out the score and stronger colour than Canary, Maximum Yellow (#fdf838), is used for the highest score.
Bittersweet (#ff6565) is used for timer because it is important information and must be very clear during the game 

On "Learn About The Countries" page (countries.html), Bright Navy Blue (#007acc) is used for back ground as it links to an image of the earth. Main text colour is Eerie (#1e1e1e) so the page looks like the reversible version of index.html.

![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/colours.png)

**--- Typography ---**
Courgette, which is similar type of font of the logo, is used for menu to show the image of "Speed". Bebas Neue is used for headings to stand out the headings and Montserrat is used for main contents to make the fonts visibility and readability maximum so that users don't have any issue of reading it and typing it.

![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/fonts.png)

## FEATURES
To be updated

## TECHNOLOGIES USED
* [HTML5](https://en.wikipedia.org/wiki/HTML) for markup
* [CSS3](https://en.wikipedia.org/wiki/CSS) for style
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for interaction
* [Google Fonts](https://fonts.google.com/) for fonts
* [Bootstrap4](https://getbootstrap.com/), css framework, for main frame of the website
* [Font Awesome](https://fontawesome.com/) for icons
* [jQuery](https://jquery.com/), javaScript library, for more efficient coding
* [Visual Studio Code](https://code.visualstudio.com/) as Integrated Development Environment (IDE)
* [Git](https://git-scm.com/) for version control
* [GitHub](https://github.com/) for keeping the files, documents and deploy the website

## RESOURCES
### General Resources
* Code Institute course materials
* Code Institute Slack Community
* [MDN](https://developer.mozilla.org/en-US/)
* [Stackoverflow](https://stackoverflow.com/)
* [Youtube](https://www.youtube.com/)
* [W3schools](https://www.w3schools.com/)

### Tools
* [Adobe](https://www.adobe.com/ie/photoshop/online/resize-image.html) To resize images

## TESTING
### Html

### Css

### JavaScript Speed Typing Game
**--- Functions ---**

As I completed the core functions of JavaScript for Speed Typing game, I test them using **[Jasmine](https://jasmine.github.io/)** which is a framework of testing JavaScript code to see if they work. 

Below are the steps of the set up for the testing.

1. Create a testing folder called **speed-typing-jasmine** on my desk top<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine1.png))

1. Open the file with **[Visual Studio Code](https://code.visualstudio.com/)** which is my Integrated Development Environment (IDE)<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine2.png))

1. Create **`index.html`** which is html document for testing, **script** and **spec** folders and **`speed-typing.js`** which is actual JavaScript in **script** folder and **`speed-typing-spec.js`** which is testing JavaScript in **spec** folder<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine3.png))

1. Create a boiler template on **`index.html`**<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine4.png))

1. Add Jasmine **CDNs** on **`index.html`**. CDNs are from **[cdnsjs](https://cdnjs.com/libraries/jasmine)**. They must be added inside **<head>** and the <ins>order of CDN is very important</ins>. It must be **`jasmine.js`** --> **`jasmine-html.js`** --> **`boot.js`** --> **`jasmine.css`** in order to make testing work correctly<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine5.png))

1. Add script of **`speed-typing.js`** and **`speed-typing-spec.js`** on **`index.html`**. They <ins>can be inside</ins> **<head>** unlike usual JavaScript scripts (usually, JavaScript scripts are located at the bottom of **<body>**). As the boiler template create **<body>**, I put them in there. The <ins>order of JavaScript script is very important</ins> and it must be **`speed-typing.js`** --> **`speed-typing-spec.js`** in order to load the files correctly<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine6.png))

To test the functions, I use **"Red Green Refactor"** method which purposely fails it first and make it pass writing just enough code to pass afterwards. The reason of this is because it could pass the test even code doesn't work and it is important to do tests from different angles.<br>
I test **showCountries** function which takes a country name as argument from a list of countries and a function which contains **if else statement**.

**showCountries Function**
1. Write description code of **clickButton** with **showCountries** function in it on **`speed-typing-spec.js`** and run it expecting to be <ins>failed</ins> as there is no showCountries function defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries1.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries2.png))

1. Create **showCountries** function on **`speed-typing.js`** but still expecting to be <ins>failed</ins> as there is no country defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries3.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries4.png))

1. Create a valuable called **let country = "Ireland"** and returning a value of "country" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries5.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries6.png))

1. This function should have **country** as a parameter and take it as an argument so add **expect(showCountries(country)).toBe(country);** on **`speed-typing-spec.js`**. Run the test expecting that "should show Ireland to be <ins>failed</ins>" but "should show countries to be <ins>passed</ins>"<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries7.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries8.png) / [Screenshot 3](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries9.png))

1. Remove "should show Ireland" as this function should be used taking country as an argument and show names of countries from the list<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries10.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/showCountries11.png))

**- Conclusion -**<br>
**showCountries** function works in the way expected

**Function With If Else Statement**<br>
This function should show correct medal depending on the score. Below is the category of each medal.
* Bronze: score <= 240
* Silver: score >= 250 && score <= 290
* Gold: score >= 300 && score <= 340
* Special Crown: score >= 350

1. Write description code of **scoreCategory** with **getMedal** function with **Bronze Medal** category which has a value of 240 in it on **`speed-typing-spec.js`** and run it expecting to be <ins>failed</ins> as there is no getMedal function defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal1.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal2.png))

1. Create **getMedal** function on **`speed-typing.js`** but still expecting to be <ins>failed</ins> as there is no score defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal3.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal4.png))

1. Set a parameter of "score" to take an argument, expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal5.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal6.png))

1. Change the value to 250 expecting to be <ins>failed</ins>. This is just to see if the value is effecting correctly<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal7.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal8.png))

1. Add **Silver Medal** category which has a value of 250 on **`speed-typing-spec.js`** expecting to be <ins>failed</ins> as there is no **if statement** defined for this yet<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal9.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal10.png))

1. Add **else if** statement of (score >= 250 && score <= 290) on **`speed-typing.js`** returning a value of "Silver" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal11.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal12.png))

1. Add **Gold Medal** category which has a value of 300 on **`speed-typing-spec.js`** and add **else if** statement of (score >=300 && score <= 340) on **`speed-typing.js`** returning a value of "Gold" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal13.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal14.png) / [Screenshot 3](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal15.png))

1. Add **Special Crown** category which has a value of 350 on **`speed-typing-spec.js`**, and add **else** statement on **`speed-typing.js`** returning a value of "Crown" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal16.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal17.png) / [Screenshot 3](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal18.png))

1. Add a value in **String** on **`speed-typing-spec.js`** expecting to be <ins>failed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal19.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal20.png))

1. Add additional **if else** statement on **`speed-typing.js`** and define only if the type of score is **number**, then go to next **if else** statement, expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal21.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/getMedal22.png))

**- Conclusion -**<br>
Function with **if else** statement works in the way expected

## PROJECT BARRIERS & SOLUTIONS
Draft: When speed typing game started, the button was still active and you could click it and it made some issues regarding replacing words and reducing seconds. I gooled it the solution and found that there is attribute disabled.

Draft: Even the time was up, I could still type and the score increased etc so I used attribute disabled for input and came up with a solution to have reset button so that until users click it, the game stays the same as how they finished and when they want to play it again, they click reset button

Draft: Display: hide; didn't apply on some elements which had d-none. Therefore, I came up with a solution to put these elements in div and give the div d-none so that I could apply display: hide for the elements inside the div.

## VERSION CONTROL
To be updated

## DEPLOYMENT
To be updated

## CREDITS
### Code
**--- HTML5 ---**
* [Bootstrap Navbar](https://getbootstrap.com/docs/4.5/components/navbar/) for navigation bar
* [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) for game instructions
* [Bootstrap Input](https://getbootstrap.com/docs/4.0/components/input-group/#custom-select) for country input

**Note:**
**These are credited on all the html files*

**--- CSS3 ---**
* [Stackoverflow](https://stackoverflow.com/questions/50668594/remove-border-color-for-navbar-toggler-hamburger-icon-bootstrap-4) to remove border colour of hamburger menu
* [Stackoverflow](https://stackoverflow.com/questions/42586729/bootstrap-4-change-hamburger-toggler-color) to change the colour of hamburger menu
* [codepen](https://codepen.io/techshiva/pen/JVbKLM) for Buzz Out button
* [w3schools](https://www.w3schools.com/howto/howto_css_placeholder.asp) for modifying placeholder

**Note:**
**These are credited on the css file*

**--- JavaScript ---**
* [Tobias Ahlin Bjerrome](https://tobiasahlin.com/moving-letters/#3) for fancy heading display
* [Traversy Media](https://www.youtube.com/watch?v=Yw-SYSG-028) I refer this YouTube tutorial to get an idea of how to build Speed Typing game. Codes written on my JavaScript are based on this with my customisation

**Note:**
**These are credited on the css file*

### Contents
* All the contents were written by me

### Media
**--- Logo ---**
* Created by me using [canva](https://www.canva.com/)

## ACKNOWLEDGEMENTS
To be updated


