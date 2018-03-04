// Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Remove from local storage
// localStorage.removeItem('name');

// Get from local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear local storage
// localStorage.clear();

// console.log(name, age);

// Submit event handler using local storage 
document.querySelector('form')
  .addEventListener('submit', (e) => {
    let tasks;
    const task = document.getElementById('task').value;

    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');

    e.preventDefault();
  });

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => console.log(task));
