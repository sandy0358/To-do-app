# To-do-app

# Do App Documentation
Overview
This is a simple web-based To-Do application that allows users to create, manage, and track their tasks. The app features a clean, modern interface with a yellow and dark teal color scheme.

# Features
Add new tasks
Mark tasks as completed
Delete tasks
Double-click to remove tasks
Responsive design

# Technical Stack
HTML5
CSS3
Vanilla JavaScript

# File Structure
To-do-app/
├── index.html
├── style.css
└── script.js

# Components
HTML Structure
<!DOCTYPE html>
<html lang="en">
    <!-- ...existing code... -->
    <div class="container">
        <div class="header">To-Do Apps</div>
        <div class="input-container">
            <input type="text" id="task-input">
            <button class="add-btn">Add</button>
        </div>
        <ul class="todo-list" id="task-list"></ul>
    </div>
    <!-- ...existing code... -->
</html>

# CSS Styling
The app uses a custom color scheme:

Background: Dark teal (#023436)
Text and buttons: Yellow (#F5E663)
Key styling features:

Flexbox layout for centering content
Hover effects on buttons
Smooth transitions
Mobile-responsive design

# JavaScript Functions
  # addTask()
Gets input from text field
Creates new task elements
Adds task to the list
Handles empty input validation
Adds event listeners for:
Click (mark as complete)
Double-click (delete task)
Delete button
# clearTasks()
Removes all tasks from the list
# saveTasks()
Saves tasks to browser's local storage
# Usage
Adding a Task

Type task in the input field
Click "Add" button or press Enter
# Completing a Task

# https://github.com/sandy0358
Click on a task to mark it as complete
Completed tasks show a strikethrough effect
# Deleting a Task



