let globalNumberOfExecutions = 0;

function fuckX() {
  //console.log('fuckeX function executed');
  // You can inject code to be executed here as a preamble
}

function fuckY() {
  //console.log('fuckeY function executed');
}

// Takes any number as input for testing
function isNumberPrime(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log('\x1b[31m', '1 is neither prime nor composite number.');
    return false;
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        return false;
      }
    }

    if (isPrime) {
      console.log('\x1b[32m', `${number} is a prime number`);
      return true;
    } else {
      console.log('\x1b[31m', `${number} is a not prime number`);
      return false;
    }
  }

  // check if number is less than 1
  else {
    console.log('The number is not a prime number.');
    return false;
  }
}

// WTF Function. Takes any `FUCK` and outputs any `FUCK`
// Stacksize is where the stack starts, and showcases where it ends during
// point of failure, then can handover to a different slave to work on it.
// It always starts from `1`. And it measure number of executions
function f(func, stacksize = 1) {
  // Display execution number
  globalNumberOfExecutions++;

  // The goal here is to use the execution number and analyze it as a prime suspect.
  // It will identify itself and output the result.
  isNumberPrime(globalNumberOfExecutions);

  // Execute the passed `FUCK`, currently with a pointer to it stored in the `func` variable. You pass the parent to the child for further manipulation and analysis.
  // By passing the parent function to the child function.
  func(f);

  // Return execution of `func`, but you can now pass a modified `func`
  // This function will modify based on observed output of previous processing.
  // `func` is the key to evolution and adaptation
  return f(func, stacksize++);
}

f(fuckX);
