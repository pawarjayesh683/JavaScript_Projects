# Body Color Changer

In this project user has used HTML5 and JavaScript.There are two buttons.
By clicking on start there will random color change and by clicking stop button the recent color will be the color of body.

While learning JavaScript this project was created.

In HTML  file associated with this script likely contains elements with id attributes "start" and "stop" that correspond to buttons. For example, <button id="start">Start</button> and <button id="stop">Stop</button>.

In JavaScript 
   - Event Listeners:An event listener is attached to the "start" button, listening for a click event. When the button is clicked, a function is executed.

   - Background Color Changing Function:The randomColor function generates a random hexadecimal color code. It uses a loop to concatenate random characters from the '0123456789ABCDEF' string to create a six-character color code.The color code is then applied to the background color of the document.body element within the interval set by the "start" button.

   - Interval Control:The setInterval function is used to repeatedly call the background color-changing function (randomColor) at a specified interval (1000 milliseconds or 1 second in this case) when the "start" button is clicked.

   The clearInterval function is called when the "stop" button is clicked, halting the color changes.

