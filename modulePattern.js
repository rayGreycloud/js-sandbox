// Module pattern - Basic Structure 
// IIFE
// (function() {
//   // Declare private vars and functions 
// 
// 
//   return {
//     // Declare public vars and functions
//   }
// })();

// Standard Module pattern
const UICtrl = (function () {
  // Private vars and functions
  let text = 'Hola Mundo';
  
  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  
  // Public stuff
  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();
