// ----- MY SOLUTION-----

const numbers = [100, 22, 3, 4]; // return 4, empty array is undefined

const max = getMax(numbers); // challenge with reduced method

console.log(max);

// function getMax(array) {
//   let maxNum = 0;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] > maxNum) {
//       maxNum = array[i];
//     } else if(array.length === 0) {
//     return undefined
// }
//   }
//   return maxNum;
// }

function getMax(array) {
  return array.reduce((accumulator, current) => {
    const maxNum = current - 1 > accumulator ? current : 0;
    return accumulator + maxNum;
  }, 0);
}

// ----- THEIR SOLUTION-----

// const numbers = [1, 2, 3, 4];

// const max = getMax(numbers);
// const max = getMax([]);

// console.log(max);

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   let max = array[0];
//   for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

//   return max;

//   array.reduce((accumulator, current) => {
//     // if (current > accumulator) return current;
//     // return accumulator;

//     return current > accumulator ? current : accumulator;
//   });
// }

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   array.reduce((a, b) => {
//     // if (current > accumulator) return current;
//     // return accumulator;

//     a > b ? a : b;
//   });
// }

// function getMax(array) {
//   if (array.length === 0) return undefined;

//   return array.reduce((a, b) => (a > b ? a : b));
// }
