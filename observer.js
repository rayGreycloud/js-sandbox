// Observer patterns 

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    // Filter callback match out of observers 
    // observers reassigned new array that filter returns 
    this.observers = this.observers.filter(observer => {
      // if no match, that observer stays in array 
      if (observer !== fn) {
        return observer;
      }  
    });
    
    console.log(`You are unsubscribed to ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(observer => observer.call());
  }
}

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});

// Click handler 
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

