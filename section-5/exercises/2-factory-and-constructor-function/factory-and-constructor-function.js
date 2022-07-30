// ----- MY SOLUTION -----

// // let address = {
// //   street: "a",
// //   city: "b",
// //   zipCode: "c",
// // };

// let address = new ConstructorAddress();
// let address2 = factoryAddress();

// function factoryAddress() {
//   let address = {
//     street: "Street",
//     city: "City",
//     zipCode: "ZipCode",
//   };
//   return address;
// }

// function ConstructorAddress() {
//   (this.street = "Street"), (this.city = "City"), (this.zipCode = "ZipCode");
// }

// ----- THEIR SOLUTION -----

// // let address = createAddress("a", "b", "c");
// let address = new Address("a", "b", "c");

// console.log(address);

// function createAddress(street, city, zipCode) {
//   return {
//     // street: street,
//     street,
//     city,
//     zipCode,
//   };
// }

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }
