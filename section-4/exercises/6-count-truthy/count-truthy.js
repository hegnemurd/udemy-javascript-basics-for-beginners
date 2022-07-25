// ** My solution **

// Falsy
// undefined
// null
// ""
// false
// 0
// NaN

// Return the number of how many truthy values are in the array

// const isActive = true;
// const name = "Potato"; // Truthy (true)
// const lastName = ""; // Falsy (false)
// if (name) {
//   console.log("Hello");
// }

const array = ["", false, true, "banana", 0, undefined];
countTruthy(array);

function countTruthy(array) {
  const newArray = [];
  for (let i in array) {
    if (array[i]) {
      // const count = array[i];
      newArray.push(array[i]);
    }
  }
  console.log(newArray.length);
}

// ** Their solution **

// const array = [0, null, undefined, "", 2, 3];

// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }
