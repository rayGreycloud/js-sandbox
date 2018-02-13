// Revealing module pattern 
const ItemCtrl = (function () {
  let data = [];
  
  function add(item) {
    data.push(item);
    console.log('Item added...');
    console.log(data);
  }
  
  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  
  return {
    add, 
    get
  }
})();

ItemCtrl.add({
  id: 1, 
  name: 'Banana'
});

console.log(ItemCtrl.get(1));
