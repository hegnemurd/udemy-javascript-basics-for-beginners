// ----- MY SOLUTION -----

try {
  // const numbers = [1, 2, 3, 4];
  const numbers = 4;
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

// ----- THEIR SOLUTION -----

// try {
//   const numbers = [1, 2, 3, 4];
//   const count = countOccurrences(null, 1);
//   console.log(count);
// } catch (e) {
//   console.log(e.message);
// }

// function countOccurrences(array, searchElement) {
//   return array.reduce((accumulator, current) => {
//     const occurrence = current === searchElement ? 1 : 0;
//     return accumulator + occurrence;
//   }, 0);
// }
