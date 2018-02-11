// Basic try...catch
// try {
//   // intentional error - ReferenceError
//   myFunction();
// 
// } catch (e) {
//   console.log(e); // prints full error 
//   console.log(e.name); // ReferenceError
//   console.log(e.message); // myFunction is not defined 
// }

// try...catch...finally
// try {
//   myFunction();
// } catch (e) {
//   console.log(e.message);
//   // finally runs regardless of result
// } finally {
//   console.log('done!');
// }
// myFunction is not defined
// done!

// TypeError
try {
  // intentional error - TypeError
  null.myFunction();
} catch (e) {
  console.log(e.name); // TypeError
  console.log(e.message); // Cannot read property 'myFunction' of null 
  console.log(e instanceof TypeError); // true
  console.log(e instanceof ReferenceError); // false
}

// SyntaxError
try {
  // intentional error - SyntaxError
  eval('/ a 1');
} catch (e) {
  console.log(e.name); // SyntaxError
}



