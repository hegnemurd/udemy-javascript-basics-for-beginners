// ----- MY SOLUTION -----

// an array of 3 price range objects

// inexpensive
// moderate
// pricey

// let priceRange = [
//   (inexpensive = {
//     minPrice: 0,
//     maxPrice: 25,
//   }),
//   (moderate = {
//     minPrice: 25,
//     maxPrice: 75,
//   }),
//   (pricey = {
//     minPrice: 75,
//     maxPrice: 1000,
//   }),
// ];

let priceRange = [
  {
    name: "Inexpensive",
    minPrice: 0,
    maxPrice: 25,
  },
  {
    name: "Moderate",
    minPrice: 25,
    maxPrice: 75,
  },
  {
    name: "Pricey",
    minPrice: 75,
    maxPrice: 1000,
  },
];

// ----- THEIR SOLUTION -----

// let priceRanges = [
//   { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
//   { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
//   { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
// ];

// let restaurants = [{ averagePerPerson: 5 }];
