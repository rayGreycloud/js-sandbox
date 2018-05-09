// ES6 Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  changeLastName(newLastName) {
    this.lastName = newLastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static tell(thingToSay) {
    console.log(thingToSay);
  }
}

const mary = new Person('Mary', 'Roe', '3-29-75');
console.log(mary.getFullName(), mary.calculateAge());

mary.changeLastName('Martin');
Person.tell(mary.greeting());
Person.tell(`Your age is ${mary.calculateAge()}`);
