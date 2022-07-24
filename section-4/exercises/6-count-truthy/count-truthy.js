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

countTruthy(["", false, true, "banana", 0, undefined]);

function countTruthy(array) {
  for (let i in array) {
    if (array[i]) {
      const count = array[i];
      const newArray = [];
      console.log(newArray);
    }
  }
}

// function countTruthy(array) {
//   const count = [];
//   for (const index of array) {
//     // let value = array[index];
//     if (count[index]) {
//       count[element];
//       // continue;
//     }
//     // console.log(index, array[index]);
//     // index++;
//     console.log(count);
//   }
// }

// function countTruthy(array) {
//   for (let index in array) {
//     console.log(index, array[index]);
//   }
// }

// ** Their solution **
