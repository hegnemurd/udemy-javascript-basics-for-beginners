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

// console.log("Here is a random number generated with Math.random():");
// console.log(Math.random());

// console.log(
//   "Here is a random number between 4 and 140 with a function: randomNumberGenerator(4, 140)"
// );
// function randomNumberGenerator(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log(randomNumberGenerator(4, 140));

// console.log("Here is a rounded number by using Math.round(1.9):");
// console.log(Math.round(1.9));

// console.log("Here is a max number by using Math.max(1, 13, 27, 2, 23, 11):");
// console.log(Math.max(1, 13, 27, 2, 23, 11));

// console.log("Here is a min number by using Math.min(1, 13, 27, 2, 23, 11):");
// console.log(Math.min(1, 13, 27, 2, 23, 11));

// ----- STRING -----

// // String Object is typeof object
// const another = new String("hi");

// String Primitive is typeof string
// const message = "This is my first message";

// console.log(message);

// console.log("message.length returns:");
// console.log(message.length);

// console.log("message[8] returns:");
// console.log(message[8]);

// console.log("message.includes('my') returns:");
// console.log(message.includes("my"));

// console.log("message.includes('not') returns:");
// console.log(message.includes("not"));

// console.log("message.startsWith('This') returns:");
// console.log(message.startsWith("This"));

// console.log("message.startsWith('this') returns:");
// console.log(message.startsWith("this"));

// console.log("message.indexOf('my') returns:");
// console.log(message.indexOf("my"));

// console.log("message.replace('first', 'second) returns:");
// console.log(message.replace("first", "second"));

// console.log("message.toUpperCase() returns:");
// console.log(message.toUpperCase());

// const longMessage = " This is my long message ";

// console.log(
//   "This is the second message with a space in beginning and at the end on the string:"
// );
// console.log(longMessage);

// console.log("message.trim() returns:");
// console.log(longMessage.trim());

// console.log("message.trimLeft() returns:");
// console.log(longMessage.trimLeft());

// const quotationMessage = 'This is my "quotation" message';
// console.log("Using escape notation in quotationMessage returns:");
// console.log(quotationMessage);

// const newLineMessage = 'This is my \n "quotation" message';
// console.log("Using new line returns:");
// console.log(newLineMessage);

// console.log("newLineMessage.split('') returns:");
// console.log(newLineMessage.split(" "));

// ----- TEMPLATE LITERALS -----

// console.log("writing 'This is my \\n first message' returns:");
// const message = "This is my \n first message";

// const longMessage = "This is my\n" + "first message";
// console.log(`Writing in the code -
// const message =
// 'This is my \\n' +
// 'first message' returns:`);
// console.log(longMessage);

// // Object {}
// // Boolean true, false
// // String '', " "
// // Template ` `
// const another = `This is my
// "first" message`;

// console.log(`Writing in the code -
// const another =
// \`This is my
// "first" message\`
// `);
// console.log(another);

// // Ability to use placeholders, functions and any other experssions in template literals

// console.log(
//   "Using ${name} expression to add the names to the string, this returns:"
// );

// const helloName = "John";
// const byeName = "Jane";

// const another = `Hi ${helloName},

// Thank you for joining my mailing list.

// Regards,
// ${byeName}`;

// console.log(another);

// ----- DATE -----

// const now = new Date();
// const date1 = new Date("May 11 2018 09:00");
// const date2 = new Date(2018, 4, 11, 9);

// now.setFullYear(2017);
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toISOString());
