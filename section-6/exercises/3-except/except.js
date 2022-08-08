// ----- MY SOLUTION-----

const numbers = [1, 2, 3, 4];

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
  let arrayLength = array.length;
  let excludedLength = excluded.length;
  let newArray = [];
  for (let index = 0; index <= excludedLength; index++) {
    for (let i = 0; i <= arrayLength; i++) {
      if (array[i] !== excluded[index]) {
        // newArray.splice(array[i], 1);
        newArray.push(array[i]);
        // break;
      }
    }
  }
  return newArray;
}

// ----- THEIR SOLUTION-----
