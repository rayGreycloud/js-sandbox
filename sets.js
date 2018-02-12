// Sets - store unique values of any type 
const set1 = new Set();

// Add values to set 
set1.add(100);
set1.add('A string');
set1.add({name: 'Darth'});
set1.add(true);
// console.log(set1); 
// Set { 100, 'A string', { name: 'Darth' }, true }

// Add values on intialization
const set2 = new Set([200, 'B string', {username: 'BigBoy69'}]);
// console.log(set2); 
// Set { 200, 'B string', { username: 'BigBoy69' } }

// Get count of values in set 
// console.log(`Size of set1 is: ${set1.size}`); // 4
// console.log(`Size of set2 is: ${set2.size}`); // 3

// Check for values 
// console.log(set1.has(100)); // true
// console.log(set2.has(100)); // false

// Value in set is reference object not primative data type
// console.log(set1.has({name: 'Darth'})); // false
// These point to different spots in memory
// console.log({name: 'Darth'} === {name: 'Darth'}); // false 

// Delete from set 
set1.delete(100);
// console.log(set1); // Set { 'A string', { name: 'Darth' }, true }

// Iterate through sets 
// for..of 
for (let item of set1) {
  // console.log(item);
}

// produces same results 
for (let item of set1.values()) {
  // console.log(item);
}

for (let item of set1.keys()) {
  // console.log(item);
}

// forEach loop
set2.forEach(value => console.log(value));

// Convert set to array 
const setArr = Array.from(set1);
console.log(setArr);
