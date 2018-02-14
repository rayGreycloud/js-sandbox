// Mediator pattern 
// Chatroom example 
// User constructor
const User = function (name) {
  this.name = name;
  this.chatroom = null;
}
// User Prototype
User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  }, 
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  } 
}
// Chatroom constructor with fn
const Chatroom = function () {
  let users = {};
  
  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    }, 
    send: function (message, from, to) {
      if (to) {
        to.receive(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

// New users
const darth = new User('darth');
const yoda = new User('yoda');
const luke = new User('luke');
// New chatroom 
const chatroom = new Chatroom();
// Register users 
chatroom.register(darth);
chatroom.register(yoda);
chatroom.register(luke);

// Test messages 
darth.send('Hello Yoda.', yoda);
yoda.send('Hi Darth, where\'s Luke?');
luke.send('Right here.');


