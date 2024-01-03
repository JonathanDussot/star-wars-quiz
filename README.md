# Star Wars Quiz

## Project Overview

Star Wars Quiz is an online quiz with the aim of attracting fans who want to test their knowledge of the Star Wars universe.  It facilitates users with the possibility to choose the level of difficulty and find more challenging questions about the topic they are so passionate about.

This website aims to appeal to fans of all ages as it includes questions in regard to content seen within all the films throughout the Star Wars saga. It also should aim to generate some interest as to the overall backstory of each character as well as the main plot itself.

![screenshot of site on amiresponsive](documentation/amiresponsive-star-wars-quiz.png)

### Live Website

You can visit the website [here](https://jonathandussot.github.io/star-wars-quiz/)

### My GitHub Repository

You can visit the GitHub Repository [here](https://github.com/JonathanDussot/star-wars-quiz)

## CONTENTS

## User Experience (UX)

### Common Usage

- The _Star Wars Quiz_ is an online quiz aimed to test the knowledge of Star Wars fans around the world.
- Quiz contestants could enjoy this type of trivia quiz at a gathering to give their evening a fun and competitive element.
- In the case of a younger audience or newcomers to the _Star Wars_ franchise, it may help to spark an interest and further feed their curiousity and facilitate their inclusion to an ever-growing community that has been so widely popular in every culture for almost half a century.

## User Stories

- I want to put my knowledge to the test in this particular topic.
- I want to be able to choose a level of difficulty that is suitable to me.
- I want to be able to easily navigate through the page and understand clearly its different functions and information presented to me.
- I want it to be dynamic and fun so I can enjoy myself either alone or in the company of my friends whilst going through the quiz.

## Design

### colour scheme

I designed the colour palette for the website myself. I only used [colormind.io](http://colormind.io/) to display the color palette of primary colours used.  Here is the list of colours used:

![screenshot of primary colours on colormind.io](documentation/colormind-colours.png)

- #111111, #333333, #dddddd, #eeeeee

  - These colours were quite basic shades between black, grey and white.  The reason being for this is that it suited the theme of _Star Wars_ perfectly, as I gave each colour a certain degree of transparency depending on the element it was used on, so that the background image of outerspace, which also happens to be black and white, can be fully appreciated at all times.

- #3333ff, #00c00, #cc0000

  - These are secondary colours found throughout the page specifically in the button elements.  The first colour is used as an active effect for the the user has clicked on an option, where as the second and third colour indicate whether an answer is right or wrong, respectively.

### Typography

I used Google Fonts to import the following:

- 'Libre Franklin' is a sans-serif style which I chose due to its close resemblance to the font used within _Star Wars_ to help give it a slightly familiar vibe to the quiz participants.

### Imagery

All the images added to the quiz are related to the franchise.  The background image has the purpose of setting the theme of the quiz, while more specific images within the body such as Yoda in the instructions and the villains within the game-difficulty buttons are set to give the user somewhat of a role as they start the quiz. The sources of each image used can be verified in the credit section below.

### Wireframes

I created these wireframes using Balsamiq.

#### Home Page

This is the home page with the instructions.  Some minor changes were made in terms of the buttons available to start running the quiz.

![screenshot of home page on Balsamiq](documentation/star-wars-quiz-wireframe-1.png)

#### Quiz Questions

An example of the questions and answers shown. The image to the right shows the reaction upon the user's interaction to an answer.

![screenshot of quiz questions on Balsamiq](documentation/star-wars-quiz-wireframe-2.png)

#### Results Page

A screenshot with the results of the quiz with the option to restart the quiz which takes the user back to the home page.

![screenshot of results page on Balsamiq](documentation/star-wars-quiz-wireframe-3.png)

### Intelligent Diagramming chart

I created this Intelligent Diagram using Lucid Chart

![screenshot of results page on Lucidchart](documentation/diagram-img.png)


## Features

### General Features on each page

The page is responsive and contains:

- Favicon of the Website
  - chosen to match the theme of the site.

![screenshot of the favicon](documentation/favicon-star-wars.png)

- Landing Page
  - This would be the first page the user would see, introducing the theme with an image, bakkground image and the instructions explaining how to play the game, clearly stating there are three levels of difficulty.

![screenshot of main page](documentation/sw-landing-page.png)

- Different levels of difficulty
  - Here users are given an exciting presentation to the aforementioned three levels so they may visualise the difficulty based on the villain they can select, this is achieved with the help of transparent png-format images and names of well-known villains to face.

![screenshot of difficulty levels on main page](documentation/sw-game-levels.png)

- Questions Display
  - This image shows how users on differently-sized screens have the possibility of seeing questions and answers on the same screen.

![screenshot of questions on different screens](documentation/sw-questions-page-diff-screens.png)

- Questions Display with a selected answer
  - Once the user selects an answer, different colours are displayed to show if they were correct.  The user is also given a 'next' button which allows the user to go onto the next question.

![screenshot of question answered](documentation/sw-questions-page-answered.png)

- Results Page
  - A screen will appear with the user's total score along with a feedback message which varies depending on the range of questions correctly answered. The message is worded in a particularly order to resemble Yoda's speech, who can be seen in the image.  This is to give the user the full experience of being immersed in the _Star Wars_ universe.

![screenshot of results page](documentation/sw-results-page.png)

### Future Implementations

ideas for future implementations I would like to include are:

1. A simple login functionality for them to be able to review their previous bookings and document some of their personal information such as a contact number should we need to call them.
2. Advertisement of offers/ open tournaments where many players can socialise and share their love of the game.
3. A bulletin section to report and celebrate achievements by children in the Kids Club with their parents' permission.

### Accessibility

In order to ensure that this website is as accessible friendly as possible, the following measures have been taken:

- Using semantic HTML elements.
- Providing descriptive alt attributes for all images for users with visual impairments.
- Providing information for screen readers for various features on the page including forms, navbar, footer among others.
- Ensuring there is a sufficient colour contrast throughout the site.
- Ensuring menu is accessible for screen readers by marking the current page as current.
- Designing forms taking accessibility into account, with appropriate labelling where needed.

WAVE displays an error within the navbar stating there is no aria-label.  However, I did give it an aria-label, and have not addressed the issue since it is the collapsible nav given in the walkthrough.

## Technologies Used

### Languages Used

The languages used for the website include HTML and CSS.

### Libraries and Programs Used

[icons8.com](https://icons8.com/icons) to create favicon.

[Tiny PNG](https://tinypng.com/) to compress images.

[GitHub](https://github.com/) to save and store my website.

[Codeanywhere](https://app.codeanywhere.com/) IDE I used for this project.

[Font Awesome](fontawesome.com) for the icons used on the site.

[Google Fonts](https://fonts.google.com/) to import fonts used on the site.

Google Dev tools - to test and fix issues detected.

[Am I Responsive?](https://ui.dev/amiresponsive) to show site on all different screen sizes.

[Pexels](https://www.pexels.com/) to use free images for site.

[Adobe color](https://color.adobe.com/create/color-wheel) to check contrast between of colours used.

[Colormind.io](http://colormind.io/) to generate color palette used.

[Balsamiq](https://balsamiq.com/) - to create wireframes.

## Deployment And Local Development

### Deployment to GitHub pages

The site is deployed using GitHub Pages. To deploy using GitHub pages:

1. Open the project repository.
2. Click on "Settings" on the navigation bar under the repository title.
3. Click on "Pages" in the left-hand navigation panel.
4. Under "Source", choose which branch to deploy. This should be Main for newer repositories.
5. Choose which folder to deploy from, usually "/root".
6. Click "Save", then wait for it to be deployed. It can take some time for the page to be fully deployed.
7. Your URL will be displayed above "Source".

You can visit the website [here](https://jonathandussot.github.io/valladolid-snooker-club/)

### Local Deployment

#### How to Fork

1. Copy the link to this repository.
2. Log in or sign up to your GitHub account and click on the **Fork** button on the top-right corner.
3. You should now have a copy included in your account.

#### How to Clone

1. Copy the link to this repository.
2. Log in or sign up to your GitHub account and click on the **Code** button.
3. You are given to option to clone using HTTPS or GitHub CLI and copy the link.

## Testing

click [here](TESTING.md) to see the all the details in regard to the testing done on the site.

## Credits

### Code Used

When creating the form, I used this code from [tutorialspoint](https://www.tutorialspoint.com/How-to-use-time-input-type-in-HTML) so I could specify the hours I wanted within the input field indicating 'Time' in both bookings page and kids club page.

`<datalist id="avail">
                                <option value="09:00"></option>`

### Content

Most of the points from the About Us & Reasons section within the home page were summarised from the information given on [bestsnookercue website](bestsnookercue.com)

### Media

- The [blue-ball.jpg](assets/images/blue-ball.jpg), [green-ball.jpg](assets/images/green-ball.jpg) and [red-ball.jpg](assets/images/red-ball.jpg) were all taken from the links to the [mcbillard.de](https://mcbillard.de/) website below respectively.  They were used to accompany my About Us & Reasons section to give a little colour and maintain the theme throughout the home page.

[blue-ball.jpg from mcbillard.de](https://mcbillard.de/product_info.php/language/en/info/p1447_Billiard-Ball-Aramith-1GTournament-Champion-blue-snooker)

[green-ball.jpg from mcbillard.de](https://mcbillard.de/product_info.php/language/en/info/p1412_Billiard-Ball-Aramith-1GTournament-Champion-green-snooker)

[red-ball.jpg from mcbillard.de](https://mcbillard.de/product_info.php/language/en/info/p1451_Billiard-Ball-Aramith-1GTournament-Champion-red-snooker)

- The [kid-snooker.jpg](assets/images/kid-snooker.jpg) was taken from the website below and helped set a sense of a professional yet friendly environment for our underage audience.

[kid-snooker.jpg from wpbsa.com](https://wpbsa.com/participation/junior-snooker/)

- The [snooker-cue-and-balls.jpg](assets/images/snooker-cue-and-balls.jpg) was taken from Pexels to set the tone for the site`s home page in the header with a sophisticated and classy look.  This photo was taken by [Qamar Rehman](https://www.pexels.com/@qamar-rehman-94539242/)

[snooker-cue-and-balls.jpg from pexels.com](https://www.pexels.com/photo/close-up-photo-of-snooker-game-11354500/)

- The [white-and-reds-big.jpg](assets/images/white-and-reds-big.jpg) was taken from Pexels. This was used within the kids club page's header.  This photo was taken by [Fritz Jaspers](https://www.pexels.com/@fritz-jaspers-746891536/)

[white-and-reds-big.jpg from pexels.com](https://www.pexels.com/photo/billiard-balls-on-a-snooker-table-18828557/)

The video media file within the kids club page was taken from the [Stephen Hendry's Cue Tips](https://www.youtube.com/watch?v=7wDxyiWBYGM) YouTube channel.

## Acknowledgements

I would like to acknowledge the following people who have been a huge help for my very first milestone project:

- [Lauren-Nicole](https://github.com/CluelessBiker) - My Code Institute Mentor for her vast amount of knowledge, relaxing demeanour and patience!

- [Kera Cudmore](https://github.com/kera-cudmore) - for her constant support through the slack community and tutorials.

- Arwen Dussot - my newborn daughter for keeping me awake at night and 'on my toes' so to speak.
