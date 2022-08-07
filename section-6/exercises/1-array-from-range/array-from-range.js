// ----- MY SOLUTION-----
const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
  let newArray = [];
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray;
}

// ----- THEIR SOLUTION-----

// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//   const output = [];
//   for (let i = min; i <= max; i++) {
//     output.push(i);
//   }
//   return output;
// }
