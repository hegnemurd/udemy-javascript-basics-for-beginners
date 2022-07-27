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

// ** Separating all the pieces of the function into separate functions **

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      return false;
    }
  }
  return true;
}

// ** Their solution **

// showPrimes(20);

// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) console.log(number);
//   }
// }
