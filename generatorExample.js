// simple example 
function* sayNames() {
  yield 'Obi-wan'; 
  yield 'Anakin'; 
  yield 'Yoda';
}

// const name = sayNames();
// 
// console.log(name.next()); // {value: "Obi-wan", done: false} 
// console.log(name.next()); // {value: "Anakin", done: false} 
// console.log(name.next()); // {value: "Yoda", done: false}
// console.log(name.next()); // {value: undefined, done: true}

// ID creator 
function* createIds() {
  let index = 1;
  
  while(1<2) {
    yield index++;
  }
}

// const newId = createIds();
// 
// console.log(newId.next().value); // 1
// console.log(newId.next().value); // 2
// console.log(newId.next().value); // 3

// User list creator
function generateUserList() {
  let doneYet = false;
  const userList = [];
  const name = sayNames();
  const newId = createIds();  
  
  while(!doneYet) {
    const newUser = name.next();
    
    if (!newUser.done) {
      userList.push({
        name: newUser.value,
        id: newId.next().value
      });      
    } else {
      doneYet = true; 
    }
  }
  
  return userList;
}

console.log(generateUserList());
