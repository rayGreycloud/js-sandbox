// Destructuring
let a, b, c, d, e, f;
 
// Arrays 
// -- Basic Assignment

[a, b] = [100, 200]; 
// a = 100, b = 200 

const people = ['Luke', 'Obi-wan', 'Yoda'];
const [person1, person2, person3] = people;
// person1 = 'Luke', etc.

// -- Rest pattern 
[a, b, ...rest] = [100, 200, 300, 400, 500];
// a = 100, b = 200, rest = [300, 400, 500] 

//  -- Parse array returned from function 
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}
[a, b, c] = getPeople();
// a = 'John', b = 'Beth', c = 'Mike'

// Objects

// -- Basic
({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// a = 100, b = 200;

// -- with ...rest
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// rest = { c: 300, d: 400, e: 500}

// -- Pulling off props 
const person = {
  name: 'Luke Skywalker',
  age: 20,
  city: 'Tatooine',
  gender: 'Male'
}

// -- -- Old ES5 
// const name = person.name,
//   age = person.age,
//   city = person.city;

// -- -- New ES6 
const { name, age, city } = person;
  
console.log(name, age, city);



