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

// ----- DEFAULT PARAMETERS -----

// function interest(principal, rate, years) {
//   rate = rate || 3.5;
//   years = years || 5;
//   return ((principal * rate) / 100) * years;
// }

// ES6 -----
// function interest(principal, rate = 3.5, years = 5) {
//   return ((principal * rate) / 100) * years;
// }

// // console.log(interest(10000, 3.5, 5));
// console.log(interest(10000));

// function interest(principal, years, rate = 3.5) {
//   return ((principal * rate) / 100) * years;
// }

// // console.log(interest(10000, 3.5, 5));
// // console.log(interest(10000, undefined, 5));
// console.log(interest(10000, 5));

// ----- GETTERS AND SETTERS -----

// const person = {
//   firstName: "Jane",
//   lastName: "Doe",
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// person.fullName = "John Doe";
// // getters => access properties
// // setters => change (mutate) them

// // console.log(person.fullName());
// console.log(person);
