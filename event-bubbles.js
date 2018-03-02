// Event Bubbling 
// Click on card-title bubbles up thru parents 
// 1-click triggers all logs
// document.querySelector('.card-title')
//   .addEventListener('click', () => {
//     console.log('card title');
//   });
// 
// document.querySelector('.card-content')
//   .addEventListener('click', () => {
//     console.log('card content');
//   });
// 
// document.querySelector('.card')
//   .addEventListener('click', () => {
//     console.log('card');
//   });
// 
// document.querySelector('.col')
//   .addEventListener('click', () => {
//     console.log('col');
//   });

// Event Delegation 
// Put listener on a parent element 
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // Check target
  // Actual target is icon but want to check parent
  if (e.target.parentElement.classList.contains('delete-item')) {
    // Remove parent of parent which is entire List Item 
    e.target.parentElement.parentElement.remove();
  }
}

