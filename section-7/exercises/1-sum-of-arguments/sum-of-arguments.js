// ----- MY SOLUTION -----

// sum(1, 2, 3, 4) => 10
// sum([1, 2, 3, 4]) => 10

// function sum(numbers) {
//   if (Array.isArray(numbers)) {
//     const initialValue = 0;
//     const sumValue = numbers.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       initialValue
//     );
//     console.log(sumValue);
//     console.log(true);
//   } else {
//     let arrayNumbers = Array.prototype.reduce.call(
//       numbers,
//       function (previousValue, currentValue) {
//         return previousValue + currentValue;
//       },
//       0
//     );
//     console.log(arrayNumbers);
//     console.log(false);
//   }
// }

// sum(1, 2, 3, 4);

// ----- THEIR SOLUTION -----

console.log(sum([1, 2, 3, 4]));
console.log(sum(1, 2, 3, 4));

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}
