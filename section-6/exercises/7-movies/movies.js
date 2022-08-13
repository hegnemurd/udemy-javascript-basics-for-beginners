// ----- MY SOLUTION-----

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

movies
  .filter((movie) => movie.rating > 4)
  .map((movie) => console.log(movie.title + ": " + movie.rating));

// ----- THEIR SOLUTION-----
