# TO - DO List

In this project we have created TO - DO List. The project has HTML5, CSS3, JavaScript.

In JavaScript we have use 

 -Element Selection: InputBox is the input field where users type their tasks.
listContainer is the container that holds the list of tasks.

 -addTask Function:
    This function is triggered to add a new task.
    If the input field (`inputBox`) is empty, an alert prompts the user to write something.
    If not empty, a new `li` element (list item) is created with the input value and appended to `listContainer`.
    A `span` element with a multiplication sign (×) is appended to the `li` element, which acts as a delete button.
    The input field is then cleared.
    The `saveData` function is called to save the updated list to `localStorage`.

 -Event Listener on `listContainer`**:
    This listener handles clicks within the `listContainer`.
    If a `li` element (task item) is clicked, it toggles the `checked` class to mark the task as completed or not.
    If a `span` element (the delete button) is clicked, it removes the parent `li` element (the task).
    After each action, `saveData` is called to update `localStorage`.

 -saveData Function:
    Saves the current state of the `listContainer`'s inner HTML to `localStorage` under the key 'data'.

 -showTask Function:
    Retrieves the stored data from `localStorage` and sets it as the inner HTML of `listContainer` when the page loads.
    This ensures that the tasks persist even after the page is refreshed.

 -Initialization:
    `showTask` is called at the end of the script to display any saved tasks when the page initially loads.

 Usage:

 -Adding a Task:
    Type a task into the input field and trigger the `addTask` function (e.g., by clicking a button).
    The task appears in the list with a delete button next to it.

 -Marking a Task as Completed:
    Click on a task item to toggle its completion status.

 -Deleting a Task:
    Click on the delete button (×) next to a task to remove it from the list.

 Persistence:
    Tasks are saved to `localStorage`, so they remain even if the page is reloaded.
