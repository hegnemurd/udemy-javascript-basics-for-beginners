// ----- ENUMERATING PROPERTIES OF AN OBJECT -----

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// for (let key in circle) {
//   console.log(key, circle[key]);
// }

// for (let key of circle) { // not iterable
//   console.log(key);
// }

// for (let key of Object.keys(circle)) {
//   console.log(key);
// }

// for (let entry of Object.entries(circle)) {
//   console.log(entry);
// }

// if ("radius" in circle) console.log("yes");

// function Object() {}
// const x = { value: 1 }; // this gets translated to -
// const x = new Object(); // -this

// ----- CLONING AN OBJECT -----

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// const another = {};
// for (let key in circle) another[key] = circle[key];

// another["radius"] = circle["radius"]; // how the code on the top is copying the object values to the new object

// a better way to copy over an object

// const another = Object.assign(
//   {
//     // colour: "yellow", // can add more properties to the object
//   },
//   circle
// ); // this piece of code does the exact same as the one above but in a better way

// const another = { ...circle };

// console.log(another);

// ----- GARBAGE COLLECTION -----

// let circle = {}; // makes space for this object
// console.log(circle); // as the object is emty and unused it will reallocate the space and gets rid of the space

// ----- MATH -----


