// ----- FUNCTION DECLARATIONS VS EXPRESSIONS -----

// // Function Declaration

// function walk() {
//   console.log("walk");
// }

// // Function Expression -->

// // Anonymous
// let run = function () {
//   console.log("run");
// };
// let move = run;
// run();
// move();

// // Named
// let skip = function skip() {
//   console.log("skip");
// };

// ----- HOISTING -----

// // Function Declaration

// walk();

// function walk() {
//   console.log("walk");
// }

// // Function Expressions
// // console.log(x);
// // let x = 1;

// run();

// const run = function () {
//   console.log("run");
// };

// ----- ARGUMENTS -----

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 10));
