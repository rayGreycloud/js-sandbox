// Object.create

const personPrototypes = {
  greeting: function() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  },
  changeLastName: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Smith';
mary.age = 30;

console.log(mary.greeting());

mary.changeLastName('Poppins');
console.log(mary.greeting());

const steve = Object.create(personPrototypes, {
  firstName: { value: 'Steve' },
  lastName: { value: 'Austin' },
  age: { value: 28 }
});
console.log(steve.greeting());
console.log(`You are ${steve.age} years old`);
