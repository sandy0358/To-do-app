const { BUILD_ID_FILE } = require("next/dist/shared/lib/constants");

function addTask() {
    // Get input element and task list
    const taskInputElement = document.getElementById('task-input');
    const taskListElement = document.getElementById('task-list');
    
    // Get and clean input value
    const taskText = taskInputElement.value.trim();
    
    // Don't add empty tasks
    if (!taskText) {
        alert('Please enter a task');
        return;
    }
    
    // Create new task item
    const taskInput = document.createElement('li');
    taskInput.textContent = taskText;
    
    // Add task to list
    taskListElement.appendChild(taskInput);
    
    // Clear input field
    taskInputElement.value = '';
    
    // Add click handler for completion
    taskInput.addEventListener('click', function() {
        taskInput.classList.toggle('completed');
    });

    // Add click handler for deletion
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    taskInput.appendChild(deleteButton);
    deleteButton.addEventListener('click', function() {
        taskListElement.removeChild(taskInput);
    });
    taskInput.addEventListener('dblclick', function() {
        taskListElement.removeChild(taskInput);
    }); 
}
   
function clearTasks() {
    // Get task list element
    const taskListElement = document.getElementById('task-list');
    
    // Clear all tasks
    taskListElement.innerHTML = '';
}
function saveTasks() {
    // Get task list element
    const taskListElement = document.getElementById('task-list');
    
    // Get all tasks
    const tasks = Array.from(taskListElement.children).map(task => task.textContent);
    
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));   
}