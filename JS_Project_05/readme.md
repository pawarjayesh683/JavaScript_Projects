# Digital Clock

In this project we have created Digital Clock. This project has HTML5, External CSS and JavaScript.

In JavaScript we have use

 -const clock = document.querySelector("#clock");: This line selects an HTML element with the id "clock" and assigns it to the constant variable clock. This element is assumed to be where you want to display the digital clock.

 -setInterval(() => { ... }, 1000);: This function is used to repeatedly execute the code inside the arrow function at a specified interval. In this case, the interval is set to 1000 milliseconds (1 second).

 -let date = new Date();: This line creates a new Date object, representing the current date and time.

 -clock.innerHTML = date.toLocaleTimeString();: It updates the inner HTML of the clock element with the current time in a localized string format obtained through toLocaleTimeString(). This method converts the time portion of the Date object into a string in a format appropriate for the locale of the user.