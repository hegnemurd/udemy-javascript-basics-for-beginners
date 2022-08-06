// ----- ITERATING AN ARRAY -----

// const numbers = [1, 2, 3];

// // for (let number of numbers) console.log(number);

// // numbers.forEach(function (number) {
// //   console.log(number);
// // });

// numbers.forEach((number, index) => console.log(index, number));

// ----- JOINING ARRAYS -----

// const numbers = [1, 2, 3];
// const joined = numbers.join(",");
// console.log(joined);

// const message = "This is my first message";
// const parts = message.split(" ");
// console.log(parts);

// const combined = parts.join("-");
// console.log(combined);

// ----- SORTING ARRAYS -----

// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// const courses = [
//   { id: 1, name: "Node.js" },
//   { id: 2, name: "JavaScript" },
// ];

// courses.sort(function (a, b) {
//   //these numbers represent the ascii table where the initials for the names are compared
//   // a < b => -1
//   // a > b => 1
//   // a = b => 0
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   //   if (a.name < b.name) return -1;
//   //   if (a.name > b.name) return 1;
//   if (nameA < nameB) return -1;
//   if (nameA > nameB) return 1;
//   return 0;
// });
// console.log(courses);

// ----- TESTING THE ELEMENTS OF AN ARRAY -----

// const numbers = [1, -1, 2, 3];

// // every() checks if all are positive numbers, if one is negative then it will return false
// // const allPositive = numbers.every(function (value) {
// //   return value >= 0;
// // });

// // some() checks if atleast one positive number is in the array, if so then will return true, if all are negative then it will return false
// const atLeastOnePositive = numbers.some(function (value) {
//   return value >= 0;
// });

// console.log(atLeastOnePositive);
