// Create a symbol 
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// console.log(sym1); // Symbol()
// console.log(sym2); // Symbol(sym2)
// console.log(typeof sym2); // symbol

// Unique object keys 
const KEY1 = Symbol();
const KEY2 = Symbol('sym3');

const myObj = {};

myObj[KEY1] = 'Prop1';
// console.log(myObj[KEY1]); // Prop1

myObj[KEY2] = 'Prop2';
// console.log(myObj[KEY2]); // Prop2

myObj['key3'] = 'Prop3';
// console.log(myObj['key3']); // Prop3

myObj.key4 = 'Prop4';
// console.log(myObj.key4); // Prop4

// Symbols not enumerable in for...in 
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
} // key3: Prop3 key4: Prop4

// Symbols are ignored in JSON.stringify 
console.log(JSON.stringify({key5: 'Prop5'})); // {"key5":"Prop5"}
console.log(JSON.stringify({[KEY2]: 'Prop6'})); // {}
console.log(JSON.stringify({[Symbol('sym7')]: 'Prop7'})); // {}


