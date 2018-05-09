// Type conversion
// helper func to print info
const valInfo = value => {
  console.log(`value: ${value}`);
  console.log(`typeof: ${typeof value}`);
  console.log(`length: ${value.length}`);
  console.log(`-------------------`);
};
// number to string
const A = 5;
const B = String(A);
valInfo(A); // 5 number undefined
valInfo(B); // 5 string 1

// boolean to string
const C = true;
const D = String(C);
valInfo(C); // true boolean undefined
valInfo(D); // true string 4

// date to string
const E = new Date();
const F = String(E);
valInfo(E); // (current date) object undefined
valInfo(F); // (current date) string 57

// array to string
const G = [1, 2, 3, 4, 5];
const H = String(G);
valInfo(G); // 1,2,3,4,5 object 5
valInfo(H); // 1,2,3,4,5 string 9

// toString()
const I = (5).toString();
const J = true.toString();
valInfo(I); // 5 string 1
valInfo(J); // true string 4

// string to number
const K = Number('5');
const L = Number('hello');
valInfo(K); // 5 number undefined
valInfo(L); // NaN number undefined

// boolean to number(??)
const M = Number(true);
const N = Number(false);
valInfo(M); // 1 number undefined
valInfo(N); // 0 number undefined

// misc to number
const O = Number([1, 2, 3]);
const P = Number(null);
valInfo(O); // NaN number undefined
valInfo(P); // 0 number undefined

// parseInt() parseFloat()
const Q = parseInt('5.5');
const R = parseFloat('5.5');
valInfo(Q); // 5 number undefined
valInfo(R); // 5.5 number undefined

// toFixed()
const S = '5.5';
// const T = S.toFixed(1);
// valInfo(T); // TypeError: S.toFixed is not a function

// Type coercion example
const U = '5';
const V = 10;
const W = U + V;
valInfo(U); // 5 string 1
valInfo(V); // 10 number undefined
valInfo(W); // 510 string 3
