// taskManager.js

let tasks = [];

export function addTask(title, dueTime, priority) {
  try {
    if (!title || !dueTime || !priority) throw new Error('Missing task fields');
    if (typeof title !== 'string' || typeof dueTime !== 'number' || typeof priority !== 'number') {
      throw new Error('Invalid task fields');
    }
    tasks.push({ title, dueTime, priority });
    console.log(`Task added: ${title}`);
  } catch (error) {
    console.error('Error adding task:', error.message);
  }
}

export function sortTasksByPriority() {
  return tasks.sort((a, b) => b.priority - a.priority);
}

export function getTasksDueIn(minutes) {
  const currentTime = new Date().getTime();
  return tasks.filter(task => task.dueTime <= minutes);
}

export function sendReminder(task) {
  const dueDate = new Date().getTime() + task.dueTime * 60000; // Convert minutes to milliseconds
  const delay = dueDate - new Date().getTime(); // Calculate the delay time
  setTimeout(() => {
    alert(`Reminder: ${task.title} is due now!`);
    console.log(`Reminder sent: ${task.title}`);
  }, delay);
}
