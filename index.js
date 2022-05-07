// program to check if a number is prime or not

// take input from the user
const args = process.argv.slice(2);

// Args are taken from CLI
// by executing the following function
// "node index.js 4"
const inputtedNumber = parseInt(args);

// While time is infinite, this function will run
const timeIsInfinite = true;

// Starting point
// Did we start from Zero or 1? Chicken or the egg?
let startingNumber = 1;

// Loop to check numbers for prime towards infinity
while (timeIsInfinite) {
  // Does time add before or after we execute?
  startingNumber = startingNumber++;

  // console.log('\x1b[32m', `${startingNumber} is current startingNumber`);

  // Have it kill itself after 10 runs
  if (startingNumber == 10) exit;

  // We'll analyze the current starting number
  number = startingNumber;

  
}
