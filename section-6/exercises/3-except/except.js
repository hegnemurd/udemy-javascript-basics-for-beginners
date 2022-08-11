// ----- MY SOLUTION-----

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 4]);

console.log(output);

function except(array, excluded) {
  let arrayLength = array.length;
  let result = [];
  for (let i = 0; i < arrayLength; i++) {
    let arrayItem = array[i]
    if (!excluded.includes(arrayItem)) {
      result.push(arrayItem);
    }
  }
  return result;
}

// What I tried before I succeeded ---

// function except(array, excluded) {
//   // let arrayItem = 0;
//   // let excludedLength = excluded.length;
//   // let excludedItem = 0;
//   // for the numbers array
//   let arrayLength = array.length;
//   let result = [];
//   for (let i = 0; i < arrayLength; i++) {
//     arrayItem = array[i];
//     // for the excluded array
//     // for (let index = 0; index < excludedLength; index++) {
//     //   excludedItem = excluded[index];
//       // if array item is not the excluded one, then add it to the empty array
//       // if (arrayItem !== excludedItem) {
//         if (!array.includes(excluded)) {
//         result.push(arrayItem);
//       } else {
//         break;
//         // when gets to last item then break out of loops and return solution
//       }
//     }
//   }
//   return result;
// }

// ----- THEIR SOLUTION-----

// const numbers = [1, 2, 3, 4];
// const output = except(numbers, [1, 4]);

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let element of array) {
//     if (!excluded.includes(element)) {
//       output.push(element);
//     }
//   }
//   return output;
// }
