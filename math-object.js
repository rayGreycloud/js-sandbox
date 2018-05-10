// Numbers and the Math Object
let val;
const num1 = 100;
const num2 = 50;

// Simple math
val = num1 + num2; // 150
val = num1 - num2; // 50
val = num1 * num2; // 5000
val = num1 / num2; // 2
val = num1 % num2; // 0

// Math Object
val = Math.PI; // 3.141592653589793
val = Math.E; // 2.718281828459045 Euler's number
val = Math.round(2.8); // 3
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(625); // 25
val = Math.abs(-4); // 4
val = Math.pow(2, 10); // 1024
val = Math.min(2, 33, 9, 29, 56, 18); // 2
val = Math.max(2, 33, 9, 29, 56, 18); // 56
val = Math.random(); // 0 - 1

// Generate random number from 1 to n
let n = 20;
val = Math.floor(Math.random() * n + 1);

console.log(val);
