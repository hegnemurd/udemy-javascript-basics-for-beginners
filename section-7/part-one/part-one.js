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

// function sum() {
//   let total = 0;
//   for (let value of arguments) total += value;
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 10));

// ----- THE REST OPERATOR -----

// function sum(args) {
//   console.log(args); // console shows only the first value
// }

// function sum(...args) {
//   console.log(args); // console shows all values
// }

// function sum(...args) {
//   return args.reduce((a, b) => a + b);
// }

// function sum(discount, ...prices) {
//   // rest parameter has to be the last parameter, to be able to iterate all the rest of the parameters
//   const total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30));
