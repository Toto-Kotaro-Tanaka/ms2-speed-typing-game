![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/logo/readme-logo.png)

# [SPEED TYPING GAME](https://toto-kotaro-tanaka.github.io/ms2-speed-typing-game/)
This is a website of a speed typing game with an additional function that users can learn about basic information of the countries. I create this for **Milestone Project 2 (Interactive Frontend Development), Full Stack Software Development** in **[Code Institute](https://codeinstitute.net/)**, Ireland.  

It is a mobile responsive website however the speed typing game can be played on a laptop or desktop only as a keyboard is required. The link to the website is available **[HERE](https://toto-kotaro-tanaka.github.io/ms2-speed-typing-game/)**.

----- Mockup goes in here when the website is completed -----

## TABLE OF CONTENTS
* #### [WHO'S THIS WEBSITE FOR?](#whos-this-website-for-heading)
* #### [WHO IS THE OWNER?](#who-is-the-owner-heading)
* #### [UX 5 PLANES](#ux5-planes-heading)
  * ##### [Strategy Plane](#strategy-plane-heading)
  * ##### [Scope Plane](#scope-plane-heading)
  * ##### [Structure Plane](#structure-plane-heading)
  * ##### [Skeleton Plane](#skeleton-plane-heading)
  * ##### [Surface Plane](#surface-plane-heading)
* #### [FEATURES](#features-heading)
  * ##### [Existing Features](#existing-features-heading)
  * ##### [Features Left To Implement](#features-left-heading)
* #### [TECHNOLOGIES USED](#technologies-used-heading)
* #### [RESOURCES](#resources-heading)
  * ##### [General Resources](#general-resources-heading)
  * ##### [Tools](#tools-heading)
* #### [TESTING](#testing-heading)
  * ##### [Html](#html-heading)
  * ##### [Css](#css-heading)
  * ##### [JavaScript](#javascript-heading)
  * ##### [Web Browser](#webbrowser-heading)
  * ##### [UX](#ux-heading)
* #### [PROJECT BARRIERS & SOLUTIONS](#barriers-solutions-heading)
* #### [VERSION CONTROL](#version-control-heading)
* #### [DEPLOYMENT](#deployment-heading)
* #### [CREDITS](#credits-heading)
  * ##### [Code](#code-heading)
  * ##### [Contents](#contents-heading)
  * ##### [Media](#media-heading)
* #### [ACKNOWLEDGEMENTS](#acknowledgements-heading)

## WHO'S THIS WEBSITE FOR? <a name="whos-this-website-for-heading"></a>
People who would like to practice typing by playing a game. Names of the countries in the world are being used for the texts so they might come across the countries that they might be interested in or never heard of during the game. In case they would like to check what those countries are like, there is a **“Let's Learn About The Countries”** section to provide basic information of each country, such as a flag, region, capital city, population, language(s), a location on google maps and link to Wikipedia* page if users want to know more details of the countries.

> **Note:**<br>
> *During the process of creating the website, an idea that Wikipedia, which will give users more details about the countries if they wish to know more, can be implemented using REST Countries API so this is implemented in the project, although it is not written on the initial project

## WHO IS THE OWNER? <a name="who-is-the-owner-heading"></a>
I am the owner of the website. My goals for this website are to provide a speed typing game that users can practice typing with fun as well as to provide basic information of countries that they see in the game. The website is build considering “Users First”. As the typing game is only playable with a keyboard (that is usually a laptop computer or desktop computer), there is a clear alert for users on a mobile and tablet sizes to inform this. The alert can be hidden by users once they get the message so it does not interrupt user all the time. There are some text and buttons are hidden on the mobile and tablet sizes so that it prevents users accidentally start the game. Even though the game itself is not playable on the mobile and tablet sizes, users can still see what the game is like so the game instructions button and other elements of the game (e.g Timer, input, score and high score) remains on the page. There are very clear and enough buttons and links to go from "Speed Typing Game" page to "Let’s Learn About The Countries" page, and vice versa so users have no issue of accessing on both sections whenever they want to. Very simply written game instructions give users clear information of how to play the game and what is involved with it. The game instructions are one of the menus so it is accessible from both pages as well as there is an additional button, which is coloured in Bittersweet (#ff6565) to stand it out, on the speed typing game page.  The instructions show on a modal so once users read and understand it, they can close it by clicking a button and they can still remain on the same page where they access the instructions.
Once the game starts, the play button is disable. This is to avoid some system errors as they could press it during the game and causes issues of it. Once the game is over, input field is disabled for the same reason as the play button. The website is kept very simple as there shouldn’t be so many different things for simple game, however, by using nicely contrasted colours, the game dose not look to be boring. 
Keeping high score in the game gives users a very good motivation to keep playing the game to get higher score. 
When the game is over, users get a medal depending on the scores and this also give users motivation to try it again and again. There is a secret crown for someone who achieve better than gold medal. This is not written on the instructions, however, users are notified once they reach the gold medal to continue the game so this is not just hidden item.      

## UX 5 PLANES <a name="ux5-planes-heading"></a>
### Strategy Plane <a name="strategy-plane-heading"></a>
Users are people who would like to practice speed typing. By creating a website as a type of gaming website, they can practice while they are having fun. By setting a time (60 seconds per game), scores, which increments by 10 points rather than 1 point so that they feel they achieve better (e.g. When you get 20 correct typings, it shows 200 points instead of 20 points), and a medal depending on the score, users know what their current typing skill is and can compare in 1 week - 1 month time how they improved.
A high score remains even after the game finishes and even the browser is closed so that it remains as a target and users can try to achieve more points and give them a motivation to continue the game more times. A name of countries is used as a text and it comes up randomly so that different combinations of texts appear on each game. Names of the countries come from **[REST Countries API](https://restcountries.eu/)** and there are 250 countries listed in the API, as of 3 Jan 2021. Users may know some countries quite well, some only little and some not at all. In case users come across the countries that they are interested in, there is a section of **“Let's Learn About The Countries”** on a different page that provides basic information of each country, such as a flag, region, capital city, population, language(s), a location on google maps, and link to Wikipedia page (implemented this during the process) as an additional function to the speed typing game. 

The main aims for this website are;

* To allow users to practice speed typing with fun. In order to achieve this, the visual and functions are kept minimum. There is a logo with the title, navbar to lead to *Home*, *Instructions*, and *Countries* on the header. For the screen size below 62rem / 992px, there is an alert that tells users that the game is only playable on laptop or desktop only as a keyboard is required to play it. In the main section of the page, there is a welcome message, game instructions button, a 60-second timer, a button to link to the **“Let's Learn About The Countries”** page, a letter display, an input box, game start button, a scoreboard, a medal display, a high scoreboard.<br>
To give users more motivation, each correct point is set to 10 instead of 1 so that they fee they achieve better.
There are also 3 different medals at the end of the game. Depending on the score, they get a Gold medal for 230 points or higher, a Silver medal for 180 - 220 points, and a Bronze medal for 170 points or below. There is a special secret crown for those who achieve a very high score. This is not written on the instructions as it is a secret item, however, once you get a Gold medal, you get a message to achieve 250 points and see what happens.

* To provide basic information of countries in the world. 
In order to achieve this, there is a dropdown menu that users can select a country. **[REST Countries API](https://restcountries.eu/)** is linked with the website to show a flag, region, capital city, population, and language(s). Google Maps API is used for the location display, Wikipedia (implemented this during the process) is used for more details of the countries and both are also linked with REST Countries API.

All the functions on the tables below are minimum that must be implemented on the website to achieve user's and owner's goals.  

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

Below are the additional functions that can improve the website however not mandatory to achieve user's and owner's goals, that are currently set up. Some aren't implemented due to a lack of my current skills and knowledge and some due to lack of time. 

| Opportunity                                            | Importance | Viability / Feasibility |
| :----------------------------------------------------- | :--------: | :---------------------: |
| Different Levels (e.g. length of letters)              |     3      |            2            |
| Keeping High Score Even Game Disconnected*             |     3      |            2            |
| User Name Input                                        |     2      |            4            |
| Highlighting Letters When Correct / Incorrect          |     2      |            2            |
| Counting Down Last 10 Seconds                          |     2      |            1            |

> **Note:**<br>
> *Keeping The Highest Score Even Game Disconnected* - At the time of planning, I had thought keeping a high score when the game disconnected was a very difficult thing to do, however, by reviewing lessons of Code Institute, I found a way of doing it so this is implemented in the game

### Scope Plane <a name="scope-plane-heading"></a>
Features to be included in this project are;
* Game instructions on modal (A modal is used to keep the number of pages minimum)
* Timer 
* Randomly selected letters (country names) when the game starts
* Counting score 
* Keeping a high score
* Displaying customised and interactive message (e.g. The results of the game, details of the countries)
* Google maps with API
* Country information with API
* Caution message* in a modal when the size goes below 62rem / 992px as the game is playable on a laptop or desktop only

> **Note:**<br>
> *Realise that caution message does not need to be in modal so set it up in alert, which is better than using a modal

### Structure Plane <a name="structure-plane-heading"></a>
The website consists of 2 pages and a modal
* **`index.html`** is **Speed Typing** game page with a logo, navbar, an alert (for table & mobile screen sizes), welcome message, game instructions button, a timer, a button to countries page, letter display, input box, a start button, a reset button, a scoreboard, medal display, a high scoreboard
* **`countries.html`** is **“Let's Learn About The Countries”** page. The same header as the first page ~26 alphabets with a list of countries for country information~ and simple display of country information with a dropdown menu. Location displays on google maps
* **`Modal`** is used for **Game Instructions**, which have very clear rules of the game and what includes in the game

### Skeleton Plane <a name="skeleton-plane-heading"></a>
The desktop-first design, though Bootstrap4 is used and it is also a mobile responsive website. The Speed Typing game is only playable on a laptop or desktop but it is still visible on the mobile and tablet sizes. Country information is available on both desktop and mobile sizes. There are wireframes of the Main page (index.html) and Countries page (countries.html) for desktop and mobile sizes.

* [Wireframes: Home](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-index-html.png)
* ~[Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-countries-html.png)~
* [Wireframes: Countries](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/wireframe-countries-html-2.png) - This is the revised version after looking for some better ideas showing the country details

### Surface Plane <a name="surface-plane-heading"></a>
**--- Colour ---**<br>
On the **"Speed Typing"** game page (index.html), a page that looks similar to Visual Studio Code is considered because the main purpose of the website is for typing. **Eerie Black (#1e1e1e)** is used for the background colour and **Bright Navy Blue (#007acc)** is used for the logo and menu. Main text colour is **Light Grey (#d4d4d4)** so that it does not give users too much contrast between the text and background colours. 
**Canary (#ffff98)** is used for a score to stands out the score and stronger colour than Canary, which is **Maximum Yellow (#fdf838)** for a high score. **Bittersweet (#ff6565)** is used for a timer because it is very important information and must be clearly displayed during the game. 

On the **“Let's Learn About The Countries”** page (countries.html), **Bright Navy Blue (#007acc)** is used for the background of information and google maps as it links to an image of the earth and presents it well. The main text colour is ~Eerie (#1e1e1e) so the page looks like the reversible version of index.html~ **Light Grey (#d4d4d4)** as Eerie on Bright Navy Blue do not match.

![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/colours.png)

**--- Typography ---**<br>
**Courgette** which is a similar type of font to the logo (Lobster) is used for the menu to show the image of "Speed". **Bebas Neue** is used for headings to stand out the headings and **Montserrat** is used for main contents to make the fonts visibility and readability maximum so that users do not have any issue of reading it especially for typing game.

![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/ux/fonts.png)

## FEATURES <a name="features-heading"></a>
### Existing Features <a name="existing-features-heading"></a>
* Created with **HTML5**, **CSS3** (with Bootstrap4 framework), **JavaScript** (with jQuery library)
* It consists of 2 individual pages, one is for "Speed Typing" game and one is for "Country Information" display
* Modal for game instructions
* Text of typing, country information is from **[REST Countries API](https://restcountries.eu/)**
* Google Maps API for location display

### Features Left To Implement <a name="features-left-heading"></a>
* Setting different levels - I think I could implement this by setting a length of text (e.g. Easy for text length up to 10 characters) however currently do not have time to do this and as it is not essential to achieve user's goals, I leave this out
* Having a user name - This would give users a more customised game however currently do not have time to implement this. Also from the design's point of view, it may look too busy to have user's name on the speed typing game page and defeats the purpose of simple page, I leave this out
* Highlighting Letters When Correct / Incorrect - This would be helpful especially when letters are quite long. I currently do not have the skills to implement this and not essential for the game so I leave this out
* Counting Down Last 10 Seconds - This would also be useful as users may not be able to take their eyes off while they are typing, although, a timer is relatively close to the text display & input box so should be visible. Giving a warning by sound would be a nice function to have. I currently do not have the skills and time. The game currenly has no sound at all so it might be a bit of interruption if users hear a counting sound suddenly so decide to leave it out this time

## TECHNOLOGIES USED <a name="technologies-used-heading"></a>
* [HTML5](https://en.wikipedia.org/wiki/HTML) for markup
* [CSS3](https://en.wikipedia.org/wiki/CSS) for style
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript) for interaction
* [Google Fonts](https://fonts.google.com/) for fonts
* [Bootstrap4](https://getbootstrap.com/), css framework, for main frame of the website
* [Font Awesome](https://fontawesome.com/) for icons
* [jQuery](https://jquery.com/), JavaScript library, for more efficient coding
* [REST Countries API](https://restcountries.eu/) for a text of speed typing game and country information display 
* [Google Maps API](https://cloud.google.com/maps-platform/) to show a location of selected countries
* [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) for testing, style checking and debbuging
* [Visual Studio Code](https://code.visualstudio.com/) as Integrated Development Environment (IDE)
* [Git](https://git-scm.com/) for local version control, keeping the files and documents
* [GitHub](https://github.com/) for online version control keeping the files, documents and deploy the website

## RESOURCES <a name="resources-heading"></a>
### General Resources <a name="general-resources-heading"></a>
* Code Institute Course Materials
* Code Institute Slack Community
* Code Institute Tutors Support
* [MDN](https://developer.mozilla.org/en-US/)
* [Stackoverflow](https://stackoverflow.com/)
* [Youtube](https://www.youtube.com/)
* [W3schools](https://www.w3schools.com/)

### Tools <a name="tools-heading"></a>
* [Adobe](https://www.adobe.com/ie/photoshop/online/resize-image.html) To resize images

## TESTING <a name="testing-heading"></a>
### Html <a name="html-heading"></a>
**--- Code Validation ---**<br>
When I complete the core HTML code, I test it using **[W3C Markup Validation Service](https://validator.w3.org/)**, which is a validator by the World Wide Web Consortium that allows checking HTML and XHTML documents for well-formed markup, to check any warnings and errors.

**`index.html`**: [2 Warnings and 3 Errors](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/w3c-index.png)
1. **Warning: Empty heading**<br>
This causes due to not having any text in `<h3>` tag. As this heading is for the "Time is Up!" message, which is generated by JavaScript at the end of the game, no text is required in it and according to the [StackOverflow post](https://stackoverflow.com/questions/23739224/empty-heading-warning-on-html5-validation#:~:text=The%20%22empty%20heading%22%20warning%20means,any%20content%20associated%20with%20it.&text=You%20are%20instead%20using%20the,the%20semantics%20of%20the%20tag.), having no text in `<hN>` tag is still valid HTML and passes the validation. However, I decide to fix the issue so I put the message in `<h3>` tag and to use `show()` method on JavaScript instead of `html()` method, which actually works out better coding as a result

1. **Warning: Empty heading**<br>
Very similar issue as the warning 1. A country name that is randomly generated from API goes into `<h2>` tag for the game. I want to show "Ireland" as the first country, that is currently set up by JavaScript, I put it as a text anyway to remove the warning. The code on JavaScript still remains the same because a randomly selected country shows on `<h2>` despite of having Ireland as a text without the code on JavaScript

1. **Error: Element `ul` not allowed as child of element `ol` in this context. (Suppressing further errors from this subtree.)**<br>
`ul` is not properly nested in `ol` according to [Nested HTML List](https://www.w3schools.com/html/html_lists_unordered.asp) on W3Schools. Put `ul` inside `<li> </li>` to solve the issue

1. **Error: The `aria-describedby` attribute must point to an element in the same document.**<br>
Refer to [MDN page](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) regarding the issue and fix it by putting **text-input** which is the id name of the element 

1. **Error: The `aria-labelledby` attribute must point to an element in the same document.**<br>
Refer to [MDN page](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) regarding the issue and fix it by putting **game-instructions** which is the id name of the element 

**- Conclusion -**<br>
Put the code on the validator after fixing these, test it, and receive **[no warnings or errors](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/w3c-index-report.pdf)**<br>
*There is a message about **Images with textual alternative** which is a reminder about images and alt. Refer to [this post](https://www.sitepoint.com/community/t/methods-for-displaying-gallery-images-with-titles/354087) and also [this website](https://webaim.org/techniques/alttext/) to understand this message. As this is not an error, no further action is taken.*

**`countries.html`**: [1 Warning and 3 Errors](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/w3c-countries.png)
1. **Warning: Empty heading**<br>
The same type of issue as No 2 on `index.html` (not the same issue as this occurs in the different section) and solve the error in the same way

1. **Error: Bad value for attribute `src` on element `img`: Must be non-empty.**<br>
In order to solve the issue, put the URL of the flag of [Ireland in REST Countries API](https://restcountries.eu/data/irl.svg) that should show first when the page is loaded

1. **Error: Element `ul` not allowed as child of element `ol` in this context. (Suppressing further errors from this subtree.)**<br>
The same issue as No 3 on `index.html` and solve the error in the same way

1. **Error: The `aria-labelledby` attribute must point to an element in the same document.**<br>
The same issue as No 4 on `index.html` and solve the error in the same way

**- Conclusion -**<br>
Put the code on the validator after fixing these, test it, and receive **[no warnings or errors](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/w3c-countries-report.pdf)**<br>
*There is a message about **Images with textual alternative** which is a reminder about images and alt. Look at [this post](https://www.sitepoint.com/community/t/methods-for-displaying-gallery-images-with-titles/354087) and also [this website](https://webaim.org/techniques/alttext/) to understand this message. As this is not an error, no further action is taken.*

**--- Quality ---**<br>
When I complete the majority of HTML, I test the quality of the website using **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**, which is an open-source, one of the automated dev tools for improving the quality of web pages. It has audits for performance, accessibility, progressive web apps, SEO. Anything 89 or below are looked at to improve the quality of the website.  

**`index.html` Mobile Size**<br>
Before - [Performance: 85 / Accessibility: 97 / Best Practices: 93 / SEO: 83 ](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-index-mobile-before.png)<br>
After - [Performance: 92 / Accessibility: 97 / Best Practices: 93 / SEO: 92 ](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-index-mobile-after.png)<br>
* Issues on Performance and SEO are addressed and solved with suggestions by Lighthouse. The issues on Performance are fixed by reducing the size of the logo and removing one of Bootstrap JavaScript, which is not necessary to be on index.html. The issue on SEO is fixed by adding `<meta name="description"/>` tag.

> **Note:**<br>
> Score of Performance varies. It may depend on internet speed(?)

**`index.html` Desktop Size**<br>
Before - [Performance: 95 / Accessibility: 88 / Best Practices: 93 / SEO: 90 ](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-index-desktop-before.png)<br>
After - [Performance: 95 / Accessibility: 96 / Best Practices: 93 / SEO: 90 ](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-index-desktop-after.png)<br>
* Issues on Accessibility are addressed and solved with suggestions by Lighthouse. The issues are fixed by adding `aria-label="Play game button"` attribute on two buttons that have no label. This is important for screen readers. Also, there is `<h3>`(Time is Up message) after `<h4>` which causes heading elements not being a sequentially-descending order so `<h3>` is changed to `<h4>`

**`countries.html` Mobile Size**<br>
Before - [Performance: 72 / Accessibility: 91 / Best Practices: 100 / SEO: 90 ](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-countries-mobile-before.png)<br>
* Main reason of low Performance is caused by **Eliminate render-blocking resources** that jQuery and Bootstrap files are rendered but not being used sufficiently. This is confirmed by the [coverage](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-countries-mobile-render.png) on Chrome DevTools. Talk to my mentor about the issue and he suggests to use minified jQuery code on jquery.js file and use it instead of linking to jQuery CDN. This does not improve the [Performance](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-countries-mobile-after.png). I have a final meeting with my mentor so will discuss this with him once again but if it is not resolved, I'd need to leave the issue as it is, as all the functions are working fine and the issue is only the performance on mobile size 

**`countries.html` Desktop Size**<br>
Before - [Performance: 94 / Accessibility: 91 / Best Practices: 93 / SEO: 90 ](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/html-testing/lighthouse-countries-desktop-before.png)<br>
* All ok and no further actions required

### Css <a name="css-heading"></a>
**--- Code Validation ---**<br>
When I complete the core CSS code, I test it using **[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)**, which is a validator by the World Wide Web Consortium that allows checking Cascading Style Sheets, to make sure that CSS complies with the standards set by the World Wide Web Consortium

**`styles.css`**: [0 Error](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/css-testing/no-errors.png) / [16 Warnings](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/css-testing/warnings.png)

* 16 warnings are related to WebKit, which is one of [web browser rendering engines](https://stackoverflow.com/questions/3468154/what-is-webkit-and-how-is-it-related-to-css). By looking at a[StackOverflow](https://stackoverflow.com/questions/52490004/what-are-all-of-these-w3c-css-validation-warnings-about) post and a [Code Institue Slack](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/css-testing/webkit.png) thread, no further actions are required so decide to leave them as they are

### JavaScript <a name="javascript-heading"></a>
**--- Code Validation ---**<br>
When I complete the core JavaScript code, I test it using **[JSHint](https://jshint.com/)**, which is a static code analysis tool used in software development for checking if JavaScript source code complies with coding rules

**`main.js`**: [25 Warning](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jshint-warnings.png), [6 Undefined Variables](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jshint-undefined.png) and [1 Unused Variable](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jshint-unused.png)

* **25 Warnings**<br>
Most of them are expressions being used in ES6 (e.g. arrow function and let / const, ) Fixed them by putting /*jshint esversion: 6 */ on main.js as suggested. There are 2 that semicolon is missing so solve the issues by putting semicolonn on them. My understanding is not to use semicolon for curly braces, however it is required for statements according to [StackOverflow](https://stackoverflow.com/questions/2717949/when-should-i-use-a-semicolon-after-curly-braces)

* **6 Undefined Variables**<br>
These are $, Anime, transferData, lat, lng and google. $ is jQuery symbol so it can be ignored. Anime TBC with mentor, transferData, lat and lng are solved by creating a global variable for them. Google TBC with mentor

* **1 Unused Variable**<br>
This is something to do with google maps. TBC with my mentor

**--- Functions ---**<br>
When I complete the core functions of JavaScript for Speed Typing game, I test it using **[Jasmine](https://jasmine.github.io/)** which is a framework for testing JavaScript code to see if they work. 

Below are the steps of the set up for the testing.

1. Create a testing folder called **speed-typing-jasmine** on my desktop<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine1.png))

1. Open the file with **[Visual Studio Code](https://code.visualstudio.com/)** which is my Integrated Development Environment (IDE)<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine2.png))

1. Create **`index.html`** which is an HTML document for testing, **script** and **spec** folders and **`speed-typing.js`** which is actual JavaScript in the **script** folder, and **`speed-typing-spec.js`** which is testing JavaScript in the **spec** folder<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine3.png))

1. Create a boilerplate on **`index.html`**<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine4.png))

1. Add Jasmine **CDNs** on **`index.html`**. CDNs are from **[cdnsjs](https://cdnjs.com/libraries/jasmine)**. They must be added inside **`<head>`** and the <ins>order of CDN is very important</ins>. It must be **`jasmine.js`** --> **`jasmine-html.js`** --> **`boot.js`** --> **`jasmine.css`** in order to make testing work correctly<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine5.png))

1. Add script of **`speed-typing.js`** and **`speed-typing-spec.js`** on **`index.html`**. They <ins>can be inside</ins> **`<head>`** unlike usual JavaScript scripts (usually, JavaScript scripts are located at the bottom of **`<body>`**). As the boilerplate create **`<body>`** tag, I put them in there. The <ins>order of JavaScript script is very important</ins> and it must be **`speed-typing.js`** (Main JavaScript file) --> **`speed-typing-spec.js`** (Testing JavaScript file) to load the files correctly<br>
([Screenshot](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/jasmine6.png))

To test the functions, I use **"Red Green Refactor"** method which purposely fails it first and makes it pass writing just enough code to pass afterward. The reason for this is because it could pass the test even code doesn't work and it is important to do tests from different angles.<br>
I test 2 functions here. One is **showCountries** function which takes a country name as an argument from a list of countries and other one is a function which contains **if else statement**.

**showCountries Function**
1. Write a description code of **clickButton** with **showCountries** function in it on **`speed-typing-spec.js`** and run it expecting to be <ins>failed</ins> as there is no showCountries function defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries1.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries2.png))

1. Create **showCountries** function on **`speed-typing.js`** but still expecting to be <ins>failed</ins> as there is no country defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries3.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries4.png))

1. Create a valuable called **let country = "Ireland"** and returning a value of "country" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries5.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries6.png))

1. This function should have **country** as a parameter and take it as an argument so add **expect(showCountries(country)).toBe(country);** on **`speed-typing-spec.js`**. Run the test expecting that "should show Ireland to be <ins>failed</ins>" but "should show countries to be <ins>passed</ins>"<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries7.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries8.png) / [Screenshot 3](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries9.png))

1. Remove "should show Ireland" as this function should be used taking the country as an argument and show names of countries from the list<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries10.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/show-countries11.png))

**- Conclusion -**<br>
**showCountries** function works in the way expected

**Function With If Else Statement**<br>
This function should show a correct medal depending on the score. Below is the category of each medal.
* Bronze: score <= 240
* Silver: score >= 250 && score <= 290
* Gold: score >= 300 && score <= 340
* Special Crown: score >= 350

1. Write description code of **scoreCategory** with **getMedal** function with **Bronze Medal** category which has a value of 240 in it on **`speed-typing-spec.js`** and run it expecting to be <ins>failed</ins> as there is no getMedal function defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal1.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal2.png))

1. Create **getMedal** function on **`speed-typing.js`** but still expecting to be <ins>failed</ins> as there is no score defined<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal3.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal4.png))

1. Set a parameter of "score" to take an argument, expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal5.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal6.png))

1. Change the value to 250 expecting to be <ins>failed</ins>. This is just to see if the value is effecting correctly<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal7.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal8.png))

1. Add **Silver Medal** category which has a value of 250 on **`speed-typing-spec.js`** expecting to be <ins>failed</ins> as there is no **if statement** defined for this yet<br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal9.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal10.png))

1. Add **else if** statement of (score >= 250 && score <= 290) on **`speed-typing.js`** returning a value of "Silver" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal11.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal12.png))

1. Add **Gold Medal** category which has a value of 300 on **`speed-typing-spec.js`** and add **else if** statement of (score >=300 && score <= 340) on **`speed-typing.js`** returning a value of "Gold" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal13.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal14.png) / [Screenshot 3](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal15.png))

1. Add **Special Crown** category which has a value of 350 on **`speed-typing-spec.js`**, and add **else** statement on **`speed-typing.js`** returning a value of "Crown" expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal16.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal17.png) / [Screenshot 3](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal18.png))

1. Add a value in **String** on **`speed-typing-spec.js`** expecting to be <ins>failed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal19.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal20.png))

1. Add additional **if else** statement on **`speed-typing.js`** and define only if the type of score is **number**, then go to next **if else** statement, expecting to be <ins>passed</ins><br>
([Screenshot 1](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal21.png) / [Screenshot 2](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/javascript-testing/get-medal22.png))

**- Conclusion -**<br>
Function with **if else** statement works in the way expected

### Web Browser <a name="webbrowser-heading"></a>
**--- Visibilities, Functions and Interactions ---**<br>
The website is available on major web browsers, such as **Chrome**, **Safari**, **Firefox**, **Opera** and **Microsoft Edge**. To make sure all the functions work properly on those browsers, the below manual tests are carried out on all of them.

1. Open the website on the browser to do a visual test. Look at all the pages including the modal (game instructions) to see if everything appears as expected<br>
([Chrome](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/chrome1.png) / [Safari](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/safari1.png) / [Firefox](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/firefox1.png) / [Opera](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/opera1.png) / [Microsoft Edge](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/edge1.png))

1. Click all the buttons and links to see if they link to the place supposed to go, open an external link in the separate page<br>

1. Play the game to see if interactive messages during the game (timer, score, country text) and after the game work (time is up, medal, medal message, high score, reset-button and message)<br>
([Chrome During The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/chrome2.png) / [Chrome After The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/chrome3.png))<br>
([Safari During The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/safari2.png) / [Safari After The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/safari3.png))<br>
([Firefox During The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/firefox2.png) / [Firefox After The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/firefox3.png))<br>
([Opera During The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/opera2.png) / [Opera After The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/opera3.png))<br>
([Microsof Edge During The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/edge2.png) / [Microsof Edge After The Game](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/edge3.png))<br>

1. Change a country randomly to see if all the information comes up correctly, including a link to Wikipedia
([Chrome Country Info](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/chrome4.png) / [Chrome Wikipedia](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/chrome5.png))<br>
([Safari Country Info](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/safari4.png) / [Safari Wikipedia](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/safari5.png))<br>
([Firefox Country Info](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/firefox4.png) / [Firefox Wikipedia](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/firefox5.png))<br>
([Opera Country Info](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/opera4.png) / [Opera Wikipedia](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/opera5.png))<br>
([Microsof Edge Country Info](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/edge4.png) / [Microsof Edge Wikipedia](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/web-browsers-testing/edge5.png))<br>

**- Conclusion -**<br>
The website works on all the major web browsers

> **Note:**<br>
> The quality of Firefox, Opera and Microsoft Edge images are not great because they are tested in the other computer and screenshots are taken there and transferred as smaller size of images. To have consistent size of images, images of Chrome and Safari are adjusted so their qualities are not great either but all still visible 

### UX <a name="ux-heading"></a>
**--- Evidence Of Achieving The Website From UX Point OF View ---**<br>
There are some essential functions to achieve good user experiences on the website and this is to test and confirm that all the functions that give users good experiences, work properly and nothing is missing or broken

* **`Header`**<br>
The logo of the website has clear meaning and can be easily identified what the website is for. Menu is well displayed and there is an icon of a person to show the current location of the page. The game is available on a laptop or desktop size computer, once the screen size goes below 62rem / 992px, an alert comes up for the users so users are clearly informed that the game is not available without a keyboard. The alert can be closed by users once they get the message.

* **`Heading`**<br>
The display of fancy Headings (Welcome To Speed Typing Game! / Let's Learn About The Countries!), which appear very smoothly, gives users an impression of speed and it can be easily linked with the main pourpose of the website that is to practice speed typing. There is a short paragraph to explain what you can do on the page and there is a link to other page from here. On the speed typing page, there is a button for instructions with stand out colour, positioned above the game section so that it cannot be missed. This is not a complicated game so users could easily figure out how to play the game, however there are some important notes on the instructions (e.g. letter cases and space matter, points for each medal etc). Instructions are written clearly and short on a modal that does not leave the page

* **`Speed Typing Game`**<br>
Very simple display not to disturb users for typing, but all necessary elements such as a timer, text for typing, play button, scoreboard, medal, high scoreboard are included. Plenty of icons are used to make the website more for gaming.  When users click the play button, it automatically focuses the input box so that they do not need to click it. There is a very small but enough affection when the input box is selected so users will notice it. When the game starts, colour of the the play button is changed and deactivated. This is to prevent users clicking it again as it causes issues. Message for play button disappears so that users can focus on the main text, which is bigger and different to other fonts, only for typing. The score increments by 10 points as users get correct typing. This is to give users better feeling that they achieve more (e.g. 14 correct typings, 14 points vs 140 points) Once the game is over, there is a message of Time is Up to let the users know it is finished. The input box is disabled as well and this is to avoid users still typing and getting scores. There is a medal (with a message) comes up a second later when the game is finished, then there is a message of Try again with reset button come up after a second later. If all the messages appear after the game at the same time, it looks too many letters suddenly on the screen and uses cannot focus on what those messages are so some messages get delayed purposely. If users achieve the highest points, high score is automatically updatedIf. It remains after the game and even the web browser is closed so users can always target it to improve their speed typing skills better. On the table and mobile size that the game is not playable, the play button is hidden so that users will not be able to play but leave most of elements of the game, including the instructions, so that they can still get ideas of the game. There is a button to countries.html page so users can access to the information page immediately if there are any countries that they want to look at.

* **`Country Info`**<br>
Used blue back ground, which gives users image of the world. The colour is nicely contrasted with the main back ground colour. Country info display is kept simple for good readability and icons are used to keep the design of the website consistent. The section of county info and google maps are split into 4 : 8 to give maps enough size. If users wonder where the information comes from, there is an info icon beside the dropdown menu that they can control open and hide and there is a link, which opens in a different page, to REST Countries API. For those who want to know more about the countries, there is a link to Wikipedia page, which also opens in a different page so that users do not leave the page. There is a button to index.html so that can access to the page easily whenever uses feel wanting to play the game


## PROJECT BARRIERS & SOLUTIONS <a name="barriers-solutions-heading"></a>
Draft: When speed typing game started, the button was still active and you could click it and it made some issues regarding replacing words and reducing seconds. I gooled it the solution and found that there is attribute disabled.

Draft: Even the time was up, I could still type and the score increased etc so I used attribute disabled for input and came up with a solution to have reset button so that until users click it, the game stays the same as how they finished and when they want to play it again, they click reset button

Draft: Display: hide; didn't apply on some elements which had d-none. Therefore, I came up with a solution to put these elements in div and give the div d-none so that I could apply display: hide for the elements inside the div.

Draft: Linking google maps with REST Countries API. I wasn't sure how to do it so looked for some solutions on google. However, I wasn't able to find any solutions so started trying to put code thinking from the logical point of view (looking at how REST countries API works for country display information) and somehow I managed to make it work. 

Draft: I was working on how to show country name as a text for typing game from REST Countries API. I had a testing version only having necessary functions to show it.
It worked when I was testing it however when I implement the code into main.js with other functions, it didn’t work properly.
I compared all the code which worked and didn’t work and discovered that initMap(lat, lng) function in displayCountryInfo was causing an issue. (I discovered it by making it in active)
I checked chrome dev tools to see what the issue was and saw that is not defined, though when there is no initMap function, it is defined and works. Therefore, to solve the issue, I first created another function to retrieve data from REST Countries just for getCountries and showCountries functions. This worked as far as I’m concerned however I felt this wasn’t the most efficient way of solving the issue so though about for a while and came up with an idea of using setTimeout() method to get the function of initMap delayed, although this would cause a delay of showing google maps on countreis.html so wanted to minimise the delay. I put the delaying time of 3000 ms and worked fine, tried 1000 ms  and worked as well and put 0 ms and still worked so I decided to leave it 0 ms to minimise the delaying time of showing google maps but still country name shows as a text

## VERSION CONTROL <a name="version-control-heading"></a>
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
7. From the second commit, the below process and commands are used. Whenever a section or even a group of work are completed, they are committed in git and pushed into GitHub, in order to make sure to keep the history of the work logged properly and not to lose the work by unexpected situations

````
* git status | To check the status of new / modified folders, files, and documents
* git add . | To put all new and updated work on the stage in git
* git commit -m "Example commit" | To commit the work on the stage in git before pushing it to GitHub
* git push | To update the repository in GitHub
````

## DEPLOYMENT <a name="deployment-heading"></a>
The website is deployed in [GitHub](https://github.com/) as it can host open-source projects of HTML, CSS, and JavaScript.
To deploy the website, I follow the below steps once login [GitHub](https://github.com/login)
1. Go to **repositories** that can be accessed from **1** or **1 - 1**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment1.png)</br></br>

1. Open the **repository**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment2.png)</br></br>

1. Go to **Setting**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment3.png)</br></br>

1. Go to **GitHub Pages** section, select **main** as the branch and click **save**<br>
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment4.png)</br></br>

1. Once the website is successfully deployed, a link to the website appears and the website is now available on public (It may take some time that website actually appears on public)
![image](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/deployment/deployment5.png)</br>

> **Note:**<br>
> Deployment using GitHub. URL is "https:// + **your GitHub username** + .github.io/ + **your repository name** + /"<br>
> (e.g. https://toto-kotaro-tanaka.github.io/ms2-speed-typing-game/)

## CREDITS <a name="credits-heading"></a>
### Code <a name="code-heading"></a>
**--- HTML5 ---**
* [Bootstrap Navbar](https://getbootstrap.com/docs/4.5/components/navbar/) for navigation bar
* [Bootstrap Modal](https://getbootstrap.com/docs/4.0/components/modal/) for game instructions
* [Bootstrap Input](https://getbootstrap.com/docs/4.0/components/input-group/#custom-select) for country input

**--- CSS3 ---**
* [Stackoverflow](https://stackoverflow.com/questions/50668594/remove-border-color-for-navbar-toggler-hamburger-icon-bootstrap-4) to remove border colour of hamburger menu
* [Stackoverflow](https://stackoverflow.com/questions/42586729/bootstrap-4-change-hamburger-toggler-color) to change the colour of hamburger menu
* [codepen](https://codepen.io/techshiva/pen/JVbKLM) for Buzz Out button
* [w3schools](https://www.w3schools.com/howto/howto_css_placeholder.asp) for modifying placeholder

**--- JavaScript ---**
* [Tobias Ahlin Bjerrome](https://tobiasahlin.com/moving-letters/#3) for fancy heading display
* [Traversy Media](https://www.youtube.com/watch?v=Yw-SYSG-028) I refer to this YouTube tutorial to get an idea of how to build a Speed Typing game. The code written on my JavaScript is based on this with my customisation. Below is the link to the original code of this tutorial. This is to prove that I did my customisation instead of just copying and pasting their code on my main.js<br>
([Original Code](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/credits/traversy-media.pdf))
* [Coding Journey](https://www.youtube.com/watch?v=THZyM2z8s-o) I refer to this YouTube tutorial to get an idea of how to provide country information display. The code written on my JavaScript is based on this with my customisation. Below is the link to the original code of this tutorial. This is to prove that I did my customisation instead of just copying and pasting their code on my main.js<br>
([Original Code](https://github.com/Toto-Kotaro-Tanaka/ms2-speed-typing-game/blob/main/assets/readme/credits/coding-journey.pdf))
* [Net-informations.com](http://net-informations.com/jq/iq/cut.htm) to prevent pasting letters in input box

> **Note:**<br>
> All credited codes are also mentioned on html, css and JavaScript files

### Contents <a name="contents-heading"></a>
* All the contents are written by me

### Media <a name="media-heading"></a>
**--- Logo ---**
* Created by me using [canva](https://www.canva.com/)

## ACKNOWLEDGEMENTS <a name="acknowledgements-heading"></a>
To be updated