// ** My solution **

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

showProperties(movie);

function showProperties(obj) {
  for (let key in movie) {
    if (typeof movie[key] === "string") {
      console.log(key, movie[key]);
    }
  }
}

// ** Their solution **

// const movie = {
//   title: "a",
//   releaseYear: 2018,
//   rating: 4.5,
//   director: "b",
// };

// showProperties(movie);

// function showProperties(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "string")
//       console.log(key, obj[key]);
//   }
// }
