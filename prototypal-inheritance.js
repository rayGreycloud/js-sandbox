// Prototypal Inheritance

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting prototypal method
Person.prototype.greeting = function() {
  return `Hello, ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');
console.log(person1.greeting()); // Hello John Doe

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit Person prototype methods
// (Without this there is no greeting method on customer1)
Customer.prototype = Object.create(Person.prototype);

// Make customer prototype return Customer()
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.customerGreeting = function() {
  return `Welcome, ${this.firstName} ${this.lastName}`;
};

// Create customer
const customer1 = new Customer('Mary', 'Smith', '555-123-4567', 'Basic');
console.log(customer1.greeting());
console.log(customer1.customerGreeting());
