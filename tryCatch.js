// Basic try...catch
try {
  // intentional error - call undefined function
  myFunction();
} catch (e) {
  console.log(e); // prints full error 
  console.log(e.name); // ReferenceError
  console.log(e.message); // 
}
