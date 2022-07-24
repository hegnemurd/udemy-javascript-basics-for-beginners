// 2 ----- LANDSCAPE OR PORTRAIT -----

// ** My solution **

let size = isLandscape(800, 90);
console.log(size);

function isLandscape(width, height) {
  return width > height ? true : false;
}

// ** Their solution **

// console.log(isLandscape(800, 600));

// function isLandscape(width, height) {
//   return width > height;
// }
