// Function declaration with defaults for params
function greet(firstName = 'Joe', lastName = 'Blow') {
  firstName = firstName === null ? '' : firstName;
  lastName = lastName === null ? '' : lastName;
  return `Hello ${firstName} ${lastName}`;
}

greet('Charlie', 'Brown'); // Hello Charlie Brown
greet(); // Hello Joe Blow
greet('Snoopy', null); // Hello Snoopy

// Function expression
const greeting = function(firstName = 'Joe', lastName = 'Blow') {
  firstName = firstName === null ? '' : firstName;
  lastName = lastName === null ? '' : lastName;
  return `Hello ${firstName} ${lastName}`;
};

greeting(); // Hello Joe Blow

// IIFE
(function(firstName = 'Joe', lastName = 'Blow') {
  firstName = firstName === null ? '' : firstName;
  lastName = lastName === null ? '' : lastName;
  console.log(`Hello ${firstName} ${lastName}`);
})(); // Hello Joe Blow

// Property Methods
const todo = {
  add: item => console.log(`Added todo: ${item}`),
  edit: id => console.log(`Edit todo: ${id}`)
  // add: function(item) {
  //   console.log(`Added todo: ${item}`);
  // },
  // edit: function(id) {
  //   console.log(`Edit todo: ${id}`);
  // }
};

todo.delete = id => console.log(`Delete todo: ${id}`);

todo.add('book');
todo.edit('1');
todo.delete('2');
