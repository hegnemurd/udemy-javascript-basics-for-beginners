// ----- MY SOLUTION-----

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
  for (let i = 0; i <= array.length; i++) {
    if (array === excluded) {
      array.splice(array[i], 1);
    }
  }
  return array;
}

// ----- THEIR SOLUTION-----
