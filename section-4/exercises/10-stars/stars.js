// ** My solution **

showStars(5);

function showStars(rows) {
  const star = "*";
  let rowStars = "";
  for (let i = 0; i < rows; i++) {
    rowStars += star;
    console.log(rowStars);
  }
}

// ** Their solution **

// showStars(5);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = "";
//     for (let i = 0; i < row; i++) pattern += "*";
//     console.log(pattern);
//   }
// }
