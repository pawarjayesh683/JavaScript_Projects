# Bubble Game 

In this project we have created Bubble Game.This project has HTML5, CSS3, JavaScript.

In JavaScript we have use

 -makeBubble(): This function is responsible for generating a grid of 144 div elements with a class "bubble" and filling each one with a random number between 0 and 9. These bubbles are then appended to an element with the ID "pbtm" in the HTML document.

 -getNewHit(): This function sets a random number between 0 and 9 to a global variable named "hitrn" and updates the HTML content of an element with the ID "hitval" to display this number. 
 
 -runTimer(): This function initializes a countdown timer set to 60 seconds. It uses setInterval() to decrement the timer every second. When the timer reaches 0, it stops the interval and displays "Game Over" in the element with the ID "pbtm".

 -increaseScore(): This function increments the score by 10 and updates the HTML content of an element with the ID "scoreval" to display the new score.

 -Event Listener: An event listener is attached to the element with the ID "pbtm". It listens for clicks on any of its child elements. When a click event occurs, it retrieves the clicked number, compares it to the current value of "hitrn", and if they match, it increases the score, generates a new set of bubbles, and gets a new hit number.

 -Initialization: The functions runTimer(), makeBubble(), and getNewHit() are called initially to start the game, generate the initial set of bubbles, and set the first hit number, respectively.