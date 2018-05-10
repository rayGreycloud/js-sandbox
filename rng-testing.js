const limit = 20;
const trials = 1000000000;
const numbers = [];

// Generate results array
for (let i = 0; i <= limit; i++) {
  numbers[i] = 0;
}

// Trials
for (let i = 1; i <= trials; i++) {
  // Generate random number
  const num = Math.floor(Math.random() * limit + 1);
  // set into array
  numbers[num] = numbers[num] + 1;
}

// // Display results
for (let j = 1; j <= limit; j++) {
  console.log(`Number: ${j} Hits: ${numbers[j]} ${numbers[j] / trials * 100}%`);
}
