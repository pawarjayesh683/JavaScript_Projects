# Tic Tac Toe Game

In this project we have created Tic Tac Toe Game. The project has HTML5, CSS3, JavaScript.

In JavaScript we have use

### Variables and Constants
1. **HTML Elements**:
   - `boxes`: Selects all elements with the class `box`.
   - `resetBtn`: Selects the element with the ID `reset-btn`.
   - `newGameBtn`: Selects the element with the ID `new-btn`.
   - `msgContainer`: Selects the element with the class `msg-container`.
   - `msg`: Selects the element with the ID `msg`.

2. **Game State**:
   - `turnO`: A boolean indicating the current player's turn (`true` for Player O and `false` for Player X).

3. **Winning Patterns**:
   - `winPattern`: An array of arrays containing the indices of the `boxes` that form winning combinations.

### Event Listeners and Game Logic
1. **Box Click Event**:
   - Each box element (`box`) has a click event listener that sets the inner text of the box to "O" or "X" depending on the current player's turn.
   - After setting the text, the box is disabled to prevent further clicks.
   - The `checkWinner` function is called to determine if the game has been won.

2. **Disable and Enable Boxes**:
   - `disableBoxes`: Disables all the boxes.
   - `enableBoxes`: Enables all the boxes and clears their inner text.

3. **Show Winner**:
   - `showWinner`: Displays a congratulatory message with the winner's name and disables all boxes.

4. **Check Winner**:
   - `checkWinner`: Iterates through the `winPattern` array and checks if any pattern forms a winning combination.
   - If a winning combination is found, it calls `showWinner` with the winner's name.

5. **Reset Game**:
   - `resetGame`: Resets the game state to the initial conditions by enabling all boxes, setting `turnO` to `true`, and hiding the message container.

6. **Button Click Events**:
   - `newGameBtn` and `resetBtn`: Both buttons have a click event listener that calls `resetGame`.

### Usage
- When a player clicks a box, it marks "O" or "X" based on the current turn and disables that box.
- After each turn, the game checks for a winner. If a winner is found, a message is displayed, and the game stops further moves by disabling all boxes.
- The "New Game" and "Reset" buttons reset the game, allowing players to start a new game.

This code sets up a basic Tic-Tac-Toe game that can be played directly in a browser with HTML elements set up accordingly.