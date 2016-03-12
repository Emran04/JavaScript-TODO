// Problem: User interaction dosen't provide desired results.
// Solution: Add interactivity so the user can manage daily task.

var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var completedTasksHolder = document.getElementById('completed-tasks');
var incompleteTasksHolder = document.getElementById('incomplete-tasks');

// Add a new task
var addTask = function () {
	console.log('Add task....');
	// When add task button pressed
	// Create a new list item with the text from #new-task:
		// Input (checkbox)
		// Lable
		// input (text)
		// button.edit
		// button.delete
		// Each element needs to modified and appended
}


// Edit an existing task
var editTask = function () {
	// When edit button is pressed
		// if parant class is .editMode
			// Switch from .editMode
			// label text become the input's text
		// else
			// Switch to .editMode
			// input value becomes the label's text
		
		// Toggle .editMode on parent
}

// Delete task
var deleteTask = function () {
	// remove the parent list item from ul
}

// Mark a task as complete
var taskCompleted = function () {
	// When the checkbox is checked
		// append it with #completed-tasks
}

// Mark a task as incomplete
var taskIncomplete = function () {
	// When the checkbox is unchecked
		// append it with #incomplete-tasks}
}


// Set click events
addButton.onclick = addTask;