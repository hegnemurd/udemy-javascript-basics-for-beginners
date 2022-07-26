// 3 ----- FIZZBUZZ -----

// ** My solution **

// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by 3 and 5 => FizzBuzz
// not divisible by 3 or 5 => input
// not a number input => "Not a number"

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (typeof input !== "number") {
    return "Not a number";
  } else {
    return input;
  }
}

// ** Their solution **

// const output = fizzBuzz(8);
// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input !== "number") return "Not a number";
//   if (typeof input !== "number") return NaN; // was shown as extra afterwards
//   if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
//   if (input % 5 === 0) return "Buzz";
//   if (input % 3 === 0) return "Fizz";

//   return input;
// }
