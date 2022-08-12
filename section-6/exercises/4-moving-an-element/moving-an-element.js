// ----- MY SOLUTION-----

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, -1);
// // index 0 indicates which number to move, in this case number 1
// // offset dictates how much it moves over, 1 means it moves over 1 place towards the back
// //offset can be negative: index = 1, offset = -1, moves 2 over towards the front

// function move(array, index, offset) {
//   // for (let element of array) {
//   //   element[index] = array[offset];
//   // }
//   // return array;
//   let arrayLength = array.length;
//   while (index < 0) {
//     index += arrayLength;
//   }
//   while (offset < 0) {
//     offset += arrayLength;
//   }
//   if (offset >= arrayLength) {
//     var newIndex = offset - arrayLength + 1;
//     while (newIndex--) {
//       array.push(undefined);
//     }
//   } else if (index > arrayLength) {
//     console.error("Invalid");
//   }
//   array.splice(offset, 0, array.splice(index, 1)[0]);
//   return array;
// }

// console.log(output);

// create this method, when number is over the length then this error occurs

// ----- THEIR SOLUTION-----

const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 0);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
