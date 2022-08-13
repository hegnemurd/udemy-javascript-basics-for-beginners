// ----- MY SOLUTION-----

// return number of times the searchElement has occurred in the array
// if number does not exist in the array, return 0
const numbers = [1, 1, 3, 2, 4, 3, 1, 11, 4];

const count = countOccurrences(numbers, -11);

function countOccurrences(array, searchElement) {
  let occurrences = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === searchElement) {
      occurrences++;
    }
  }
  return occurrences;
}

// const count = numbers.reduce(function countOccurrences(array, searchElement) {
//   let occurrences = 0;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === searchElement) {
//       occurrences + 1;
//     }
//   }
//   return occurrences;
// });

console.log(count);

// ----- THEIR SOLUTION-----

// const numbers = [1, 1, 2, 3, 4];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let element of array) if (element === searchElement) count++;
//   return count;
// }

// function countOccurrences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }
