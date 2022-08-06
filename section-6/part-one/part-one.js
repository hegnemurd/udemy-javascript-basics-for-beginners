// ----- ADDING ELEMENTS -----

// const numbers = [3, 4];

// End
// numbers.push(5, 6);
// console.log(numbers);

// Beginning
// numbers.unshift(1, 2);
// console.log(numbers);

// Middle
// numbers.splice(2, 0, "a", "b");
// console.log(numbers);

// ----- FINDING ELEMENTS (PRIMITIVES) -----

// const numbers = [1, 2, 3, 1, 4];

// shows -1, since it is not in the array
// console.log(numbers.indexOf("a"));
// shows 0, since it is in that position
// console.log(numbers.indexOf(1));
// shows 3, since the second argument states where to start counting from and it counts only the second number 1
// console.log(numbers.indexOf(1, 2));
// shows 3, since the last 1 in the array is in that position
// console.log(numbers.lastIndexOf(1));

// if this return true, then the value exists in the array
// console.log(numbers.indexOf(1) !== -1);
// nicer way of writing the same as above
// console.log(numbers.includes(1));

// ----- FINDING ELEMENTS (OBJECTS) -----

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// Returns the first course object that satisfies the criteria for this array
// const course = courses.find(function (course) {
//   return course.name === "b";
// });

// Return the first course object's index, which satifies the criteria for this array
// const course = courses.findIndex(function (course) {
//     return course.name === "b";
//   });

// console.log(course);

// ----- ARROW FUNCTIONS -----

// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const course = courses.find((course) => course.name === "b");

// console.log(course);

// ----- REMOVING ELEMENTS -----

// const numbers = [1, 2, 3, 4];

// removing element from the end
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// removing element from the beginning
// const first = numbers.shift();
// console.log(first);

// removing element from the middle
// numbers.splice(1, 2);
// console.log(numbers);

// ----- EMPTYING AN ARRAY -----

// let numbers = [1, 2, 3, 4];
// let another = numbers;

// // Solution 1 - best
// // numbers will be garbage collected, if adding another variable to point to this array then it will not be garbage collected
// numbers = [];

// // Solution 2 - best
// // both arrays are equal to 0
// numbers.length = 0;

// // Solution 3 - less favoured
// // both arrays are empty
// numbers.splice(0, numbers.length);

// // Solution 4 - less favoured
// // not recommended, when using an array with many elements - it keeps calling pop every single time
// while (numbers.length > 0) numbers.pop();

// console.log(numbers);
// console.log(another);

// ----- COMBINING AND SLICING ARRAYS -----

// // --- primitive values wil lhave primitive values are copied over

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);

// // const slice = combined.slice(2, 4);
// // const slice = combined.slice(2);
// const slice = combined.slice();

// console.log(combined);
// console.log(slice);

// // --- with objects the references are copied and not the object -
// // they will still reference to the same original object

// const first = [{ id: 1 }];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;

// const slice = combined.slice();

// console.log(combined);
// console.log(slice);

// ----- THE SPREAD OPERATOR -----

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// // const combined = first.concat(second);
// // const combined = [...first, ...second];
// const combined = ["a", ...first, "b", ...second, "c"]; // can add element to the beginning, middle and end of the combined array if wanted to

// // const copy = combined.slice();
// const copy = [...combined];

// console.log(copy);
