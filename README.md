![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/logo/readme-logo.pdf)

# SPEED TYPING
This is a website of a speed typing game with an additional function that users can learn about basic information of the countries. I create this for **Milestone Project 2, Full Stack Software Development in Code Institute**.  

It is a mobile responsive website however the speed typing game can be played on the desktop only as a keyboard is required. The link of website is available on HERE (My note: attach a link of the website here)

----- Mockup goes in here when the website is completed -----

## WHO'S THIS WEBSITE FOR?
People who would like to practice typing by playing a game. I use names of the countries in the world for this so they might come across the countries that they might be interested in or never heard of. In case they would like to check what those countries are like, there is a **“Learn About The Countries In The World”** section to provide basic information of each country, such as a location on the google maps, capital city, population, language and a flag.

## WHO IS THE OWNER?
I am the owner of the website. My goals of this website are to provide a speed typing game that users can practice typing with fun as well as to provide basic information of countries that they see in the game.

## UX 5 PLANES

### Strategy Plane

Users are people who would like to practice speed typing. By creating a website as a type of gaming website, they can practice while they are having fun. By setting a time (My note: 60s / 30s - TBC) and score, that increments by 10 rather than 1 so that they feel they achieved better. (e.g. When you get 20 correct typings, it shows 200 instead of 20)
The highest score remains during the game so that users can try to achieve more points and give them a motivation to continue the game more. A name of countires is used as a text, that they type, and it comes up randomly so that differnt combination of texts appear on each game. There are 195 countries in the world*. Users know some countries quite well, some only little and some not at all. In case users come across the countries that they are interested in, there is a section of **“Learn About The Countries In The World”** on a different page that provides basic information of each country, such as a location on the google maps, capital city, population, language and a flag, as an addition function to the speed typing game. 

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
| Different Levels                                       |     3      |            2            |
| Keeping The Highest Score Even Game Disconnected       |     3      |            2            |
| User Name Input                                        |     2      |            4            |
| Highlighting Letters When Correct / Incorrect          |     2      |            2            |
| Counting Down Last 10 Seconds                          |     2      |            1            |

## Scope Plane
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

## Structure Plane
The website consists of 2 pages.
- First page (index.html) is **Speed Typing** game page with a logo, title, navbar, timer, letter display, input, , score, the highest score and instruction.
- Second Page is (countries.html) is **“Learn About The Countries In The World”** page. The same header as the first page applies and 26 alphabest with a list of countries for country information and location on google maps.

## Skeleton Plane
Desktop first design, though it is also responsive website. Game is only available on desktop but countries information is available on mobile size as well. There are wireframes of Main page(index.html) and Country Courses, Accommodation and Register for mobile, tablet and desktop sizes.

* [Wireframes: Home](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/wireframes/wireframe-index-html.pdf)
* [Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/wireframes/wireframe-countries-html.pdf)

## Surface Plane
**--- Colour ---**
On "Speed Typing" page (index.html), a page which looks similar to Visual Studio Code is sonsidered because main purpose of the website is for typing. Nero (#1e1e1e) is used for the back ground colour and Navy Blue (#007acc) is used for the logo and menu.
Main text colour is Light Gray (#d4d4d4) so that it doesn't give users too much contrast between the text and back ground colours. 
Pale Canary(#ffff98) is used for score to stands out the score and slightly lighter colour than Pale Canary - name unknown - (#fdf838)  is used for the highest score.
Bittersweet (#ff6565) is used for timer because it is important information and must be very clear during the game 

On "Learn About The Countries" page (countries.html), Navy Blue (#007acc) is used for back ground as it links to an image of the earth. Main test colour is Nero (#1e1e1e) so the page looks like the reversible version of index.html.

**--- Typography ---**
Courgette, which is similar type of font of the logo, is used for menu to show the image of "Speed". Bebas is used for headings to stand out the headings and Montserrat is used for main contents to make the fonts very clear, easy to read so that users don't have issue of reading it and typing it.
