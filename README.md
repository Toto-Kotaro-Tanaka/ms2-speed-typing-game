![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/logo/readme-logo.png)

# [SPEED TYPING](https://toto-kotaro-tanaka.github.io/ms2-speed-typing-game/)
This is a website of a speed typing game with an additional function that users can learn about basic information of the countries. I create this for **Milestone Project 2 (Interactive Frontend Development), Full Stack Software Development** in **[Code Institute](https://codeinstitute.net/)**, Ireland.  

It is a mobile responsive website however the speed typing game can be played on laptop / desktop only as a keyboard is required. The link of website is available on **[HERE](https://toto-kotaro-tanaka.github.io/ms2-speed-typing-game/)**

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
People who would like to practice typing by playing a game. I use names of the countries in the world for this so they might come across the countries that they might be interested in or never heard of. In case they would like to check what those countries are like, there is a **“Let's Learn About The Countries”** section to provide basic information of each country, such as a location on the google maps, a flag, region, capital city, population and language(s).

## WHO IS THE OWNER?
I am the owner of the website. My goals of this website are to provide a speed typing game that users can practice typing with fun as well as to provide basic information of countries that they see in the game.

## UX 5 PLANES
### Strategy Plane
Users are people who would like to practice speed typing. By creating a website as a type of gaming website, they can practice while they are having fun. By setting a time (60 seconds per game), score which increments by 10 points rather than 1 point so that they feel they achieve better (e.g. When you get 20 correct typings, it shows 200 points instead of 20 points) and a medal depending on the score, users know what their current typing skill is and can compare in 1 week - 1 month time how they improved.
High score remains even after the game finishes, even browser is closed, so that it remains as a target and users can try to achieve more points and give them a motivation to continue the game more times. A name of countries is used as a text and it comes up randomly so that different combination of texts appear on each game. Names of countries come from **[REST Countries API](https://restcountries.eu/)** and there are 250 countries listed in the API*. Users may know some countries quite well, some only little and some not at all. In case users come across the countries that they are interested in, there is a section of **“Let's Learn About The Countries”** on a different page that provides basic information of each country, such as a location on the google maps, a flag, region, capital city, population and language(s), as an additional function to the speed typing game. 

* *As of 3 Jan 2021*

The main aims for this website are;

- To give users an opportunity to practice speed typing with fun. In order to achieve this, the visual and functions are kept minimum. There is a logo with the title, navebar to lead to *Home*, *Instructions* and *Countries* on the header. For the screen size 62rem / 992px, there is an alert that tells users that the game is only availabe on laptop / desktop only as a keyboard is required to play it. On the main section, there is a welcome message, game instructions button, a 60-second timer, a button to link to **“Let's Learn About The Countries”** page, a letter display, input box, game start button, score board, medal display, high score board.<br>
To give users more motivation, each correct point is set to 10 instead of 1 so that they fee they achieve better.
There are also 3 different medals at the end of the game. Depending on the score, they get a Gold medal, a Silver medal or a Bronze medal (My note: Scores for this TBC). There is a secret special crown for those who achieve very high score. This is not written on the instructions as it is a secret item, however once you get gold medal, you get a message trying to achieve further points (currently set to 250 but TBC) and see what happens.

- To provide basic information of countries in the world 
In order to achieve this, **[REST Countries API](https://restcountries.eu/)** is linked with the website and a location on the google maps, a flag, region, capital city, population and language(s) are displayed when a country is selected on the dropdown menu.

All the functions on the tables below are minimum that must be implemented in the website to achieve user's and owner's goals.  

| Opportunity                                            | Importance | Viability / Feasibility |
| :----------------------------------------------------- | :--------: | :---------------------: |
| Game Instructions in Modal                             |     5      |            5            |
| A Timer                                                |     5      |            5            |
| A Random Text                                          |     5      |            5            |
| Score Board                                            |     5      |            5            |
| Countries API with Google Maps                         |     5      |            5            |
| Google Maps                                            |     5      |            5            |
| Info Display for Countries                             |     5      |            5            |
| High Score Board                                       |     4      |            5            |
| Fancy Welcome Message                                  |     3      |            4            |
| Responsiveness                                         |     3      |            4            |

Below are the additional functions that can improve the website however not mandatory to achieve user's and owner's goals, that are currently set up. Some aren't implemented due to a lack of my current skills and knowledges and some due to lack of time. 

| Opportunity                                            | Importance | Viability / Feasibility |
| :----------------------------------------------------- | :--------: | :---------------------: |
| Different Levels (e.g. length of letters)              |     3      |            2            |
| Keeping High Score Even Game Disconnected*             |     3      |            2            |
| User Name Input                                        |     2      |            4            |
| Highlighting Letters When Correct / Incorrect          |     2      |            2            |
| Counting Down Last 10 Seconds                          |     2      |            1            |

Note: Keeping The Highest Score Even Game Disconnected* - At the time of planning, I had thought keeping high score when the game disconnected was very difficult thing to do however, by reviewing lessons of Code Institute, I found the way of doing it so this is implemented in the game 

### Scope Plane
Features to be included on this project are;
- Game instructions on modal (to keep the number of pages minimum)
- Timer 
- Randomly selected letters (country names) when the game starts
- Counting score 
- Keeping high score
- Displaying customised / interactive message (e.g. The results of the game, details of the countries)
- Google maps with API
- Country information with API
- Caution message in modal when the size goes below 62rem / 992px as the game is available on laptop / desktop only

Note: Realised that caution message does not need to be in modal so set up it in alart

### Structure Plane
The website consists of 2 pages.
- **`index.html`** is **Speed Typing** game page with a logo, navbar, an alert (for table & mobile sizes screen), welcome message, game instructions button, a timer, a button to countries page, letter display, input box, a start button, score board, medal display, high score board
- **`countries.html`** is **“Let's Learn About The Countries”** page. The same header as the first page ~26 alphabets with a list of countries for country information~ and simple display of country information with dropdown menu. Location displays on google maps.

### Skeleton Plane
Desktop first design, though it is also responsive website. The Speed Typing game is only available on laptop / desktop but country information is available on both desktop and mobile sizes. There are wireframes of Main page (index.html) and Countries page (countries.html) for desktop and mobile sizes.

* [Wireframes: Home](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-index-html.png)
* ~[Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-countries-html.png)~
* [Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-countries-html-2.png) *This is the revised version after looking for some better ideas showing the country details

### Surface Plane
**--- Colour ---**<br>
On **"Speed Typing"** game page (index.html), a page which looks similar to Visual Studio Code is considered because main purpose of the website is for typing. **Eerie Black (#1e1e1e)** is used for the background colour and **Bright Navy Blue (#007acc)** is used for the logo and menu. Main text colour is **Light Grey (#d4d4d4)** so that it does not give users too much contrast between the text and back ground colours. 
**Canary (#ffff98)** is used for score to stands out the score and stronger colour than Canary, that is **Maximum Yellow (#fdf838)** for high score. **Bittersweet (#ff6565)** is used for a timer because it is very important information and must be very clear during the game 

On **“Let's Learn About The Countries”** page (countries.html), **Bright Navy Blue (#007acc)** is used for background of information and google maps as it links to an image of the earth and present it well. Main text colour is ~Eerie (#1e1e1e) so the page looks like the reversible version of index.html~ **Light Grey (#d4d4d4)** as it Eerie on Bright Navy Blue do not match.

![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/colours.png)

**--- Typography ---**<br>
**Courgette** which is similar type of font of the logo (Lobster) is used for menu to show the image of "Speed". **Bebas Neue** is used for headings to stand out the headings and **Montserrat** is used for main contents to make the fonts visibility and readability maximum so that users do not have any issue of reading it especially for typing game.

![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/fonts.png)

## FEATURES
### Existing Features
* Created with **HTML5**, **CSS3** (with Bootstrap4 framework), **JavaScript** (with jQuery library)
* It consists of 2 individual pages
* Modal for game instructions
* Text of typing, country information is from **[REST Countries API](https://restcountries.eu/)**
* Google maps API for location display

### Features Left To Implement
* Setting different levels - I think I could implement this by setting a length of text (e.g. Easy for text length up to 10 characters) however currently do not have time to do this and as it is not absolutely essential to achieve user's goals, I leave this out
* Having a user name - This would give users more customised game however currently do not have time to implement this well from the design's point of view, because by having this on the current page, it may look too busy on the page and will defeat the purpose of simple page, so I leave this out
* Highlighting Letters When Correct / Incorrect - This would be helpful especially when letters are quite long. I currently do not have skills to implement this and not for essential for the game so I leave this out
* Counting Down Last 10 Seconds - This would also be useful as users may not be able to take their eyes off while they are typing. A timer is relatively close to text display & input box so should be visible but giving a warning by sound would be nice function to have. I currently do not have skills and time but might look at this. (TBC)

## TECHNOLOGIES USED
* [HTML5](https://en.wikipedia.org/wiki/HTML) for markup
* [CSS3](https://en.wikipedia.org/wiki/CSS) for style
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for interaction
* [Google Fonts](https://fonts.google.com/) for fonts
* [Bootstrap4](https://getbootstrap.com/), css framework, for main frame of the website
* [Font Awesome](https://fontawesome.com/) for icons
* [jQuery](https://jquery.com/), JavaScript library, for more efficient coding
* [REST Countries API](https://restcountries.eu/) for text of speed typing game and country information display 
* [Google Maps API](https://cloud.google.com/maps-platform/) to show a location of selected countries
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

1. Create a boilerplate on **`index.html`**<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine4.png))

1. Add Jasmine **CDNs** on **`index.html`**. CDNs are from **[cdnsjs](https://cdnjs.com/libraries/jasmine)**. They must be added inside **<head>** and the <ins>order of CDN is very important</ins>. It must be **`jasmine.js`** --> **`jasmine-html.js`** --> **`boot.js`** --> **`jasmine.css`** in order to make testing work correctly<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine5.png))

1. Add script of **`speed-typing.js`** and **`speed-typing-spec.js`** on **`index.html`**. They <ins>can be inside</ins> **<head>** unlike usual JavaScript scripts (usually, JavaScript scripts are located at the bottom of **<body>**). As the boilerplate create **<body>**, I put them in there. The <ins>order of JavaScript script is very important</ins> and it must be **`speed-typing.js`** --> **`speed-typing-spec.js`** in order to load the files correctly<br>
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

Draft: Linking google maps with REST Countries API. I wasn't sure how to do it so looked for some solutions on google. However, I wasn't able to find any solutions so started trying to put code thinking from the logical point of view (looking at how REST countries API works for country display information) and somehow I managed to make it work. 

Draft: I was working on how to show country name as a text for typing game from REST Countries API. I had a testing version only having necessary functions to show it.
It worked when I was testing it however when I implement the code into main.js with other functions, it didn’t work properly.
I compared all the code which worked and didn’t work and discovered that initMap(lat, lng) function in displayCountryInfo was causing an issue. (I discovered it by making it in active)
I checked chrome dev tools to see what the issue was and saw that is not defined, though when there is no initMap function, it is defined and works. Therefore, to solve the issue, I first created another function to retrieve data from REST Countries just for getCountries and showCountries functions. This worked as far as I’m concerned however I felt this wasn’t the most efficient way of solving the issue so though about for a while and came up with an idea of using setTimeout() method to get the function of initMap delayed, although this would cause a delay of showing google maps on countreis.html so wanted to minimise the delay. I put the delaying time of 3000 ms and worked fine, tried 1000 ms  and worked as well and put 0 ms and still worked so I decided to leave it 0 ms to minimise the delaying time of showing google maps but still country name shows as a text

## VERSION CONTROL
### Git & GitHub
I use **[Git](https://git-scm.com/)** as a local repository and **[GitHub](https://github.com/)** as a remote repository. The process of version control is;
1. Create a **remote repository** in GitHub by clicking **"New repository"** on the main page
2. Create a folder called **ms2-speed-typing-game** on my computer (e.g. Desktop)
3. Open the folder with [Visual Studio Code](https://code.visualstudio.com/) which is my Integrated Development Environment (IDE)
4. Create README.md file
5. Create a **local repository** by using command line with ***git init*** command
6. First commit in git repository and first push to GitHub using the below commands;
````
* git add README.md
* git commit -m "Initial commit"
* git branch -M main
* git remote add origin https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game.git
* git push -u origin main
````
7. From the second commit, the below process and commands are used. Whenever a section or even a group of work are completed, they are commited in git and pushed into GitHub, in order to make sure to keep the history of the work logged properly and not to lose the work by unexpected situations

````
* git status | To check the status of new / modifiled folders, files and documents
* git add . | To put all new and updated work on the stage in git
* git commit -m "Example commit" | To commit the work on the stage in git before pushing it to GitHub
* git push | To update the work in GitHub
````

## DEPLOYMENT
My website is deployed in [GitHub](https://github.com/) as it can host open-source projects of HTML, CSS and JavaScript.
To deploy the website, I follow the below steps from the login screen of [GitHub](https://github.com/login)
1. Go to **repositories** that can be accessed from **1** or **1 - 1**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment1.png)</br></br>

1. Open the **repository**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment2.png)</br></br>

1. Go to **Setting**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment3.png)</br></br>

1. Go to **GitHub Pages** section, select **main** as the branch and click **save**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment4.png)</br></br>

1. Once the website is successfully deployed, a link of the website appears
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment5.png)</br>

Note: 
- Deployed before completing the website in order to test google maps API because restriction is set that API only works from this website so in order to test goole maps, deployment was required
- It may take some time that your website becomes availabe on public
- URL is "https:// + **your GitHub username** + .github.io/ + **your repository name** + /"<br>
(e.g. https://toto-kotaro-tanaka.github.io/ms2-speed-typing-game/)

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
* [Traversy Media](https://www.youtube.com/watch?v=Yw-SYSG-028) I refer this YouTube tutorial to get an idea of how to build Speed Typing game. Code written on my JavaScript are based on this with my customisation
* [Coding Journey](https://www.youtube.com/watch?v=THZyM2z8s-o) I refer this YouTube tutorial to get an idea of how to provide country information display. Code written on my JavaScript are based on this with my customisation

**Note:**
**These are credited on the JavaScript file*

### Contents
* All the contents were written by me

### Media
**--- Logo ---**
* Created by me using [canva](https://www.canva.com/)

## ACKNOWLEDGEMENTS
To be updated


