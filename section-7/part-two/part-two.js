// ----- TRY AND CATCH -----

// const person = {
//   firstName: "Jane",
//   lastName: "Doe",
//   set fullName(value) {
//     if (typeof value !== "string") throw new Error("Value is not a string.");

//     const parts = value.split(" ");
//     if (parts.length !== 2) throw new Error("Enter a first and last name");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// // person.fullName = "John Doe";
// try {
//   person.fullName = "";
// } catch (e) {
//   alert(e);
// }

// console.log(person);

// ----- LOCAL VS GLOBAL SCOPE-----

// function start() {
//   const message = "Hi"; // local scope and unreachable from outside

//   if (true) {
//     const another = "bye"; // local scope and unreachable from outside
//   }

// //   console.log(another); // undefined

//   for (let i = 0; i<5;i++) {
//     console.log(i); // 0 => 5
//   }
//   console.log(i); // undefined
// }

// console.log(message); // undefined

// const color = "red"; // global constant

// function start() {
//   const message = "hi"; // local constant
//   const color = "blue"; // local constant takes priority over global constant
//   console.log(`${message} ${color}`);
// }

// function stop() {
//   const message = "bye"; // local constant
//   console.log(`${message} ${color}`);
// }

// start();
