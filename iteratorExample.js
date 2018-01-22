// Iterator example 
function nameIterator(names) {
  let nextIndex = 0;
  
  return {
    next: function () {
      return nextIndex < names.length ?
      { value: names[nextIndex++], done: false } :
      { done: true }
    }
  }
}

// Create names array 
const namesArr = ['Obi-wan', 'Anakin', 'Yoda'];

// Initialize iterator and pass in names 
const names = nameIterator(namesArr);

console.log(names.next().value); // Obi-wan
console.log(names.next().value); // Anakin 
console.log(names.next().value); // Yoda

const { value, done } = names.next();
console.log(value, done); // undefined true
