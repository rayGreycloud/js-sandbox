// ES6 Sub Classes

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

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }
}

const john = new Customer('John', 'Smith', '555-123-4567', 'Basic');

Person.tell(john.greeting());
