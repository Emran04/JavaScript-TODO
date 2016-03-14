// Problem: User interaction dosen't provide desired results.
// Solution: Add interactivity so the user can manage daily task.

var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var completedTasksHolder = document.getElementById('completed-tasks');
var incompleteTasksHolder = document.getElementById('incomplete-tasks');

var createNewElem = function (taskText) {
	var listItem = document.createElement('li');
	// Input (checkbox)
	var checkbox = document.createElement('input');
	// Lable
	var label = document.createElement('label');
	// input (text)
	var inputText = document.createElement('input');
	// button.edit
	var editButton = document.createElement('button');
	// button.delete
	var deleteButton = document.createElement('button');
	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(inputText);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	// Each element needs to modified and appended
	checkbox.type = 'checkbox';
	label.innerText = taskText;
	inputText.type = 'text';
	editButton.innerText = 'Edit';
	editButton.className = 'edit';
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';

	return listItem;
}

// Add a new task
var addTask = function () {
	console.log('Add task....');
	// Create a new list item with the text from #new-task:
	var newTask = this.parentNode;
	var newInput = newTask.querySelector('#new-task');
	if (newInput.value == "") {
		newInput.value = 'Please write your task!';
		return;
	}
	var listItem = createNewElem(taskInput.value);
	incompleteTasksHolder.appendChild(listItem);
	bindEvents(listItem, taskCompleted);
	taskInput.value = "";
}


// Edit an existing task
var editTask = function () {
	console.log('Edit task....');
	var listItem = this.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');

	var editButton = listItem.querySelector('.edit');

	var listClass = listItem.classList.contains('editMode');

	if (listClass) {
		// label text become the input's text
		label.innerText = editInput.value;
		editButton.innerText = 'Edit';
	} else {
		// input value becomes the label's text
		editInput.value = label.innerText;
		editButton.innerText = 'Save';
	}
	// Toggle .editMode on list item
	listItem.classList.toggle('editMode');
}

// Delete task
var deleteTask = function () {
	console.log('Delete task....');
	// remove the parent list item from ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

// Mark a task as complete
var taskCompleted = function () {
	console.log('Task completed....');
	// append it with #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindEvents(listItem, taskIncomplete);
}

// Mark a task as incomplete
var taskIncomplete = function () {
	console.log('Task incompleted....');
	// append it with #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindEvents(listItem, taskCompleted);
}

var bindEvents = function (listItems, checkboxEventHandlar) {
	// get cheldrans of li
	console.log('Bind events....');
	var editButton = listItems.querySelector('button.edit');
	var deleteButton = listItems.querySelector('button.delete');
	var checkbox = listItems.querySelector('input[type=checkbox]');
	
	// bind edit button with editTask
	editButton.onclick = editTask;
	// bind delete button with deleteTask
	deleteButton.onclick = deleteTask;
	// bind checkbox with checkboxEventHandlar
	checkbox.onchange = checkboxEventHandlar;
}


// Set click events
addButton.addEventListener('click', addTask);


// Cycle over incompleteTasksHolder and bind events
for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
	bindEvents(incompleteTasksHolder.children[i], taskCompleted);
}


// Cycle over completedTasksHolder and bind events
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	bindEvents(completedTasksHolder.children[i], taskIncomplete);
}
