# Rock Paper Scissor Game

In this project we have created Rock Paper Scissor Game. The project has HTML5, CSS3 and JavaScript.

In JavaScript we have use 

1. **Initial Setup**:
   - `userScore` and `compScore` are initialized to 0 to keep track of the player's and computer's scores.
   - Various elements are selected from the DOM using `document.querySelector` to interact with the game: 
     - `choices` represents the buttons for rock, paper, and scissors.
     - `msg` is where messages to the user will be displayed.
     - `userScorePara` and `compScorePara` will display the player's and computer's scores, respectively.

2. **Computer's Choice**:
   - The `genComputerChoice` function generates a random choice for the computer from the options "rock," "paper," or "scissor".

3. **Game Logic**:
   - The `drawGame` function updates the message to inform the player that the game was a draw.
   - The `showWinner` function updates the score and message based on whether the player won or lost.
     - If `userWin` is true, the player's score is incremented, and a winning message is displayed with a green background.
     - If `userWin` is false, the computer's score is incremented, and a losing message is displayed with a red background.

4. **Gameplay**:
   - The `playGame` function takes the player's choice, generates the computer's choice, and determines the result of the game:
     - If the player's choice matches the computer's choice, `drawGame` is called.
     - Otherwise, it determines if the player wins based on standard Rock-Paper-Scissors rules and calls `showWinner` with the appropriate arguments.

5. **Event Listeners**:
   - An event listener is added to each choice button. When a button is clicked, the `playGame` function is called with the player's choice.

Overall, this script enables a basic interactive Rock-Paper-Scissors game, with user interface updates and score tracking.