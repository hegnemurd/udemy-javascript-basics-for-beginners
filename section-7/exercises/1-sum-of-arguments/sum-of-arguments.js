// ----- MY SOLUTION -----

// sum(1, 2, 3, 4) => 10
// sum([1, 2, 3, 4]) => 10

function sum(numbers) {
  //   let total = 0;
  //   for (let i = 0; i <= numbers.length; i++) {
  //     total = i + i;
  //   }

  if (Array.isArray(numbers)) {
    console.log(true);
    const initialValue = 0;
    const sumValue = numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    console.log(sumValue);
  } else {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
      sum += i;
    }
    console.log(sum);
    console.log(false);
  }

  //   console.log(total);
}

sum(1, 2, 3, 4);
// sum([1, 2, 3, 4]);

// Array.isArray(); // if is => true otherwise => false

// ----- THEIR SOLUTION -----
