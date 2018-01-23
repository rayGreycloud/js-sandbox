// Generator example 
function* sayNames() {
  yield 'Obi-wan'; 
  yield 'Anakin'; 
  yield 'Yoda;'
}

const name = sayNames();

console.log(name.next());
