# KeyBoard Check

In this project user has used HTML5, Internal CSS and JavaScript.While learning JavaScript this project was created.

In this project you can check whether your keyboard's key are working or not.

You will also get the key code of particular key which you will hit

In JavaScript it has  
    - const insert = document.getElementById('insert');: This line retrieves the HTML element with the ID 'insert' and assigns it to the constant variable insert. This element is likely a placeholder where the dynamic information will be inserted.

    - window.addEventListener('keydown', (e) => { ... });: This line adds an event listener to the window object, listening for the 'keydown' event. When a key is pressed, the provided callback function is executed, and the event object e is passed as an argument.

    - The callback function updates the content of the HTML element with the ID 'insert' dynamically using template literals and the information from the event object (e).

    - The inserted HTML contains a <div> with the class 'color' and a <table> with rows and columns to display information about the pressed key.

    - Inside the table, there are two rows (<tr>):The first row contains table headers (<th>) for "Key," "Keycode," and "Code."
        The second row contains actual data about the key pressed:
        The first column (<td>) displays the key itself. If the key is a space  character, it displays "Space" instead.
        The second column shows the key's keycode using e.keyCode.
        The third column displays the key's code using e.code.

    - It's worth noting that keyCode is deprecated, and it's recommended to use code or key properties for better cross-browser compatibility. In this code, both keyCode and code are utilized to provide comprehensive information about the pressed key.