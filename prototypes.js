// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Prototype methods
// Calculate age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Change last name
Person.prototype.changeLastName = function(newLastName) {
  return (this.lastName = newLastName);
};

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Roe', '3-29-75');

console.log(`${mary.getFullName()}, ${mary.calculateAge()}`); // Mary Roe, 43
console.log(`${john.getFullName()}, ${john.calculateAge()}`); // John Doe, 27
console.log(john.changeLastName('Bow'));
console.log(`${john.getFullName()}, ${john.calculateAge()}`); // John Bow, 27

console.log(mary.hasOwnProperty('firstName')); // True
console.log(mary.hasOwnProperty('middleName')); // False
