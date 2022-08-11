// ----- MY SOLUTION-----

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);
// move 1 will move 1 over, offset dictates how much it moves over, 2 means it moves over 2 places.
//offset can be negative: index = 1, offset = -1, moves 2 over to the front

function move(array, index, offset) {
  for (let element of array) {
    element[index] = array[offset];
  }
  return array;
}

console.log(ouput);

console.error("Invalid");
// create this method, when number is over the length then this error occurs

// ----- THEIR SOLUTION-----
