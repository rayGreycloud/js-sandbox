// Maps = key-value pairs
// ANY type can be used as key or value 

const map1 = new Map();

// Set keys 
const key1 = 'some string';
const key2 = {};
const key3 = function () {};

// Set map values by key 
map1.set(key1, 'Abracadabra');
map1.set(key2, 'Hocus Pocus');
map1.set(key3, 'Abraca Pocus');

// Get values by key 
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count values 
// console.log(map1.size);

// Iterating maps 
// Loop using for...of 
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// for (let key of map1.keys()) {
//   console.log(key);
// }
// 
// for (let value of map1.values()) {
//   console.log(value);
// }

// Loop using forEach 
// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);
// });

// Convert to array 
// Create array of key-value pairs 
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Create array of values 
const valArr = Array.from(map1.values());
console.log(valArr);

// Create array of keys 
const keyArr = Array.from(map1.keys());
console.log(keyArr);


