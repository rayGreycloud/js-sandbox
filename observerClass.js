// Observer pattern as ES6 Class
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe (fn) {
    this.observers.push(fn);
    console.log(`You are subscribed to ${fn.name}`);
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(observer => {
      if (observer !== fn) {
        return observer;
      }  
    });
    
    console.log(`You are unsubscribed to ${fn.name}`);
  }
  
  fire() {
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

