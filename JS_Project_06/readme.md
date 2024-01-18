# Guess the Number

In this project the user has created a game in which we have to guess the number from 1 to 100. The system will randomly create a number within a range i.e 1 to 100. 
In this project the user has used HTML5, CSS3 and Modern JavaScript.

In Modern JavaScript we have use

 1. Random Number Generation
 2. HTML Element Selection
 3. Event Listener
 4. Game Logic:validateGuess(guess): Validates the user's guess for correctness and range. Displays an alert for invalid inputs.
    checkGuess(guess): Compares the user's guess with the random number and provides feedback (too low, too high, or correct).
    displayGuess(guess): Displays the user's guess in the HTML, increments the guess count, and updates the remaining guesses count.
    displayMessage(message): Displays messages (e.g., "You guessed it right" or "Number is too low/high").
    endGame(): Ends the game, disables input, and provides an option to start a new game.
    newGame(): Resets the game state for a new round when the "Start new Game" button is clicked.