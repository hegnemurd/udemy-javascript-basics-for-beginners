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

// let x = {}; // let x = new Object();

// new String(); // '', "", ``
// new Boolean(); // true, false
// new Number(); // 1, 2, 3, ...

// ----- FUNCTIONS ARE OBJECTS -----

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const Circle1 = new Function(
//   "radius",
//   `
// this.radius = radius;
// this.draw = function() {
//   console.log("draw");
// };
// `
// );

// const circle = new Circle1(1)

// Circle.call({}, 1);
// if multiple arguments: Circle.call({}, 1, 2, 3, ..);

// if multiple arguments then can add as an array
// Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);

// write in console
//      Circle.name
//      Circle.length
//      Circle.constructor

// ----- VALUE VS REFERENCE TYPES -----

// ----- Value (also called Primitives)
// Number, String, Boolean, Symbol, undefined, null
// Primitives are copied by their value!!!

// x and y are independent

// let x = 10; // x = 10
// let y = x; // y = 10

// x = 20; // x = 20, but y = 10

// ----- Reference
// Object, Function, Array
// Objects are copied by their reference!!!

// when the information is stored in an object, the value can change
// as y copies over the object not the value itself inside the object
// as the value changes in the object the y takes the new changed value
// x and y both equal { value: 10 } or {whatever is inside this object}

// let x = { value: 10 };
// let y = x;

// x.value = 20;

// let number = 10;

// function increase(number) {
//   number++; // this number is indepenedent copy from the number we defined outside this function
// }

// increase(number);
// console.log(number); // in the console it is the value 10

// let obj = { value: 10 };

// function increase(obj) { // the obj called references to the obj object that was created prior to the function and uses the value from that said object
//   obj.value++;
// }

// increase(obj);
// console.log(obj); // in the console the value for the object will be 11, since it has been incremented by the function
