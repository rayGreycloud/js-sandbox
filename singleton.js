// Singleton Pattern 
const Singleton = (function () {
  let instance;
  let index = 1;  

  function createInstance() {    
    const object = new Object({
      name: 'Singh',
      number: index
    });
    index++;
    return object;
  }
  
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);

const instanceB = Singleton.getInstance();
console.log(instanceB);

console.log(instanceA === instanceB);
