// Get elements 
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input 
taskInput.value = '';

// Form event 
// form.addEventListener('submit', runEvent);

// Input events
// keydown
// taskInput.addEventListener('keydown', runEvent);
// keyup
// taskInput.addEventListener('keyup', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus event 
taskInput.addEventListener('focus', runEvent);
// Blur event
taskInput.addEventListener('blur', runEvent);
// Cut event
taskInput.addEventListener('cut', runEvent);
// Paste event
taskInput.addEventListener('paste', runEvent);
// Input event 
taskInput.addEventListener('input', runEvent);
// Change event 
select.addEventListener('change', runEvent);

// Run event 
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  
  // Get input value with form event
  // console.log(taskInput.value);
  
  // Log key presses with keydown (lags behind)
  // console.log(e.target.value);
  // Use values in element
  // heading.innerText = e.target.value;
  // log key presses with keyup (no lag)
  // console.log(e.target.value);
  // log key presses with keypress (lags)
  // console.log(e.target.value);
  
  // Value if any
  console.log(e.target.value);

  // e.preventDefault();
}



