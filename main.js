"use strict";
// Define an array to store tasks
let tasks = [];
// Function to add a new task
function addTask() {
    const taskDescription = document.getElementById('taskDescription').value;
    const taskStatus = document.getElementById('taskStatus').value;
    // Check if both fields are filled
    if (taskDescription.trim() === '' || taskStatus.trim() === '') {
        alert('Please fill in both fields');
        return;
    }
    // Add task to the tasks array
    tasks.push({ description: taskDescription, status: taskStatus });
    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
    // Clear the form fields
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskStatus').value = '';
    // Display tasks
    displayTasks();
}
// Function to display tasks
function displayTasks() {
    const expenseList = document.getElementById('expenseList');
    if (!expenseList)
        return; // Check if element exists
    expenseList.innerHTML = ''; // Clear the existing list
    // Get tasks from local storage or initialize empty array
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Loop through tasks array and create list items
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = `${task.description} - ${getStatusText(task.status)}`;
        // Create a clear button for each task
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear';
        clearButton.addEventListener('click', () => {
            // Remove the task from the array
            tasks.splice(index, 1);
            // Update local storage
            localStorage.setItem('tasks', JSON.stringify(tasks));
            // Refresh the task list
            displayTasks();
        });
        li.appendChild(clearButton);
        expenseList.appendChild(li);
    });
}
// Function to get status text based on status value
function getStatusText(status) {
    switch (status) {
        case 'pending':
            return 'Pending to Start';
        case 'working':
            return 'Working on it';
        case 'completed':
            return 'Completed';
        default:
            return 'Unknown';
    }
}
// Function to switch back to the main page
function goToMainPage() {
    const dashboard = document.getElementById('dashboard');
    const expenseTracker = document.getElementById('expenseTracker');
    if (dashboard && expenseTracker) {
        dashboard.style.display = 'none';
        expenseTracker.style.display = 'block';
    }
}
// Call displayTasks initially to show any existing tasks
displayTasks();
