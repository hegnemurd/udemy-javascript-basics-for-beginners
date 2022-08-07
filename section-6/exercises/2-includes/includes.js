// ----- MY SOLUTION-----

const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));

// function to work like includes method - true or false

console.log(includes(numbers, 1));

function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}

// ----- THEIR SOLUTION-----

// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 1));

// function includes(array, searchElement) {
//   for (let element of array) if (element === searchElement) return true;
//   return false;
// }
