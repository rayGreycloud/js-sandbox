let firstName, fullName, greeting, lastName, name, sentence, userName, val;

firstName = 'Darth';
lastName = 'Vader';
userName = 'darthvader';

// Concatenation
fullName = firstName + ' ' + lastName; // Darth Vader
// Append
name = firstName;
name += lastName; // DarthVader

greeting = 'Hello, ' + fullName + '. How are you?';
// Template literal
greeting = `Hello, ${fullName}. How are you?`;

// Escaping characters
// sentence = 'That\'s awesome, I can\'t wait';

// Note, escaping not necessary with template literal
sentence = `That's awesome, I can't wait`;

// length (N.B - it's a property, not a method - no invocation)
val = fullName.length; // 11

// concat()
val = firstName.concat(' ', lastName); // Darth Vader

// Change case
val = firstName.toLowerCase(); // darth
val = userName.toUpperCase(); // Darthvader;

// Get string character by index
let initials = firstName[0] + lastName[0]; // DV

// indexOf()
val = userName.indexOf('v'); // 5
val = userName.lastIndexOf('a'); // 6
val = userName.indexOf('z'); // -1

// charAt()
val = firstName.charAt(2); // r
val = firstName.charAt('2'); // r
// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 3); // Dar

// slice() - just like substring but works on arrays
val = firstName.slice(0, 3); // Dar
val = firstName.slice(-3); // rth

// split() - creates array of strings
sentence = 'How now brown cow';
val = sentence.split(' '); // [ 'How', 'now', 'brown', 'cow' ]

// replace()
val = sentence.replace('cow', 'wow'); // How now brown wow

// includes() - returns boolean
val = sentence.includes('brown'); // true
val = sentence.includes('fox'); // false
val = greeting.includes('. H'); // true

console.log(val);
