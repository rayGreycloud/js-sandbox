/*
  BUILT-IN CONSTRUCTORS
*/

/* 
  String Constuctor
*/
const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(typeof name1); // string
console.log(typeof name2); // object not primitive 
/*
if (name1 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}
// Yes

if (name2 === 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}
// No

if (name2 == 'Jeff') {
  console.log('Yes');
} else {
  console.log('No');
}
// Yes
*/

/*
  Number - Same as string; Number constructor creates object not primitive
*/
const number1 = 42;
const number2 = new Number(19);
console.log(typeof number1); // number 
console.log(typeof number2); // object

/*
  Boolean - Same as string and number constructors
*/
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1, typeof bool1); // boolean 
console.log(bool2, typeof bool2); // object

/* 
  Function - Different than above; constructor creates function not object
*/
const getSum1 = function (x,y) { return x + y; }
const getSum2 = new Function('x','y', 'return x + y');
console.log(getSum1(1, 1), typeof getSum1); // 2, function
console.log(getSum2(2, 2), typeof getSum2); // 4, function 

/* 
  Object - both return object
*/
const obj1 = { name: "John" };
const obj2 = new Object({ name: "John" });
console.log(typeof obj1); // object
console.log(typeof obj2); // object  

/* 
  Arrays - both return object inheriting from Array prototype
*/
const array1 = [1, 2, 3, 4];
const array2 = new Array(1, 2, 3, 4);
console.log(array1, typeof array1); // object 
console.log(array2, typeof array2); // object  

/* 
  Regex - both return object
*/
const regex1 = /\w+/;
const regex2 = new RegExp('\\w+'); // Have to escape backslash
console.log(regex1, typeof regex1); // object
console.log(regex2, typeof regex2); // object  

