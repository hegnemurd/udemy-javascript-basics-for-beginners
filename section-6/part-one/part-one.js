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
