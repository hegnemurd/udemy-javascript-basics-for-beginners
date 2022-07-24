// ** My solution **

// all numbers from 0 till limit
// numbers to show next to them "EVEN" or "ODD"

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i, "EVEN");
    } else {
      console.log(i, "ODD");
    }
  }
}

// ** Their solution **

// showNumbers(3);

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) console.log(i, "EVEN");
//     else console.log(i, "ODD");
//   }
// }

// cleaner version =>

// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     const message = i % 2 === 0 ? "EVEN" : "ODD";
//     console.log(i, message);
//   }
// }
