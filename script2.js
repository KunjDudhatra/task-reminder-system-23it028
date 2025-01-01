// app.js
import { addTask, sortTasksByPriority, getTasksDueIn, sendReminder } from './script.js';

const addTaskButton = document.getElementById('addTaskButton');
const taskTitleInput = document.getElementById('taskTitle');
const dueTimeInput = document.getElementById('dueTime');
const priorityInput = document.getElementById('priority');
const taskList = document.getElementById('taskList');
const upcomingTasksList = document.getElementById('upcomingTasksList');

addTaskButton.addEventListener('click', () => {
  const title = taskTitleInput.value;
  const dueTime = parseInt(dueTimeInput.value);
  const priority = parseInt(priorityInput.value);
  
  // Add task
  addTask(title, dueTime, priority);

  // Clear input fields
  taskTitleInput.value = '';
  dueTimeInput.value = '';
  priorityInput.value = '';

  // Display tasks
  displayTasks();
  displayUpcomingTasks();
});

function displayTasks() {
  taskList.innerHTML = '';
  const sortedTasks = sortTasksByPriority();
  sortedTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.title} - Due in ${task.dueTime} minutes (Priority: ${task.priority})`;
    taskList.appendChild(taskItem);

    // Send reminder
    sendReminder(task);
  });
}

function displayUpcomingTasks() {
  upcomingTasksList.innerHTML = '';
  const tasksDueIn10Minutes = getTasksDueIn(10);
  tasksDueIn10Minutes.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${task.title} - Due in ${task.dueTime} minutes (Priority: ${task.priority})`;
    upcomingTasksList.appendChild(taskItem);
  });
}
