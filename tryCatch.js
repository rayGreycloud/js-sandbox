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
try {
  myFunction();
} catch (e) {
  console.log(e.message);
  // finally runs regardless of result
} finally {
  console.log('done!');
}
// myFunction is not defined
// done!

