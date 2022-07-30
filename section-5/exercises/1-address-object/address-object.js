// ----- MY SOLUTION -----
// street
// city
// zipcode
// func showAddress(address) - display all properties with value

const address = {
  street: "Street",
  city: "City",
  zipCode: "ZipCode",
};

function showAddress(address) {
  for (let key in address) {
    console.log(key, address[key]);
  }
}

// showAddress(address);

// ----- THEIR SOLUTION -----

// const address = {
//   street: "a",
//   city: "b",
//   zipCode: "c",
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(address);
