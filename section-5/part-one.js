// ----- BASICS -----

// Object-Oriented Programming (OOP)
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   isVisible: true,
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw(); // Method

// ----- FACTORY FUNCTIONS -----

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// ----- CONSTRUCTOR FUNCTIONS -----

// use Pascal notation: OneTwoThreeFour
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
//   // return this
// }

// const circle = new Circle(1);
// // const x = {};

// ----- DYNAMIC NATURE OF OBJECTS -----

// const circle = {
//   radius: 1,
// };

// circle.colour = "yellow";
// circle.draw = function () {};

// delete circle.colour;
// delete circle.draw;

// console.log(circle);

// ----- CONSTRUCTOR PROPERTY -----

// this references the function that was used to construct or create the object

let x = {}; // let x = new Object();

new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...
