// 1 ----- MAX OF TWO NUMBERS -----

// ** My solution **

function maxNum(numOne, numTwo) {
  if (numOne > numTwo) {
    console.log(numOne);
    return numOne;
  } else {
    // can remove else{} line
    console.log(numTwo);
    return numTwo;
  }
}

maxNum(19, 40);

// ** Their solution **

// let number = max(4, 6);
// console.log(number);

// function max(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// function max(a, b) {
//   if (a > b) {
//     return a;
//   }

//   return b;
// }

// function mac(a, b) {
//   return a > b ? a : b;
// }