// ** My solution **

// Prime (whose factors are only 1 and itself) ie 11, 13 etc
// Composite ie 12, 14 etc

// loop through 20, 1-20
// if statement i/1 && i/i
// if statement = true
// loop through all numbers up until i; 1-i
// if comes back false then console.log("i");
// if comes back true, then nothing is returned
// then continue to the next number

showPrimes(20);

function showPrimes(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i / 1 && i / i) {
      for (let index = 2; index <= i; index++) {
        if (i / index !== 0) {
          console.log(i);
        } else {
          continue;
        }
      }
    }
  }
}

// ** Their solution **
