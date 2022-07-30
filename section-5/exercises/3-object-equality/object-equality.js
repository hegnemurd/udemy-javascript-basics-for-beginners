// ----- MY SOLUTION -----

let address1 = new Address("Street", "City", "ZipCode");
let address2 = new Address("Street", "City", "ZipCode");

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// === areequal

console.log(areEqual());

function areEqual(address1, address2) {
  let oneKey;
  let oneProp;
  for (let key in address1) {
    oneProp.push(address1[key]);
    oneKey.push(key);
  }
  let twoKey;
  let twoProp;
  for (let key2 in address2) {
    twoProp.push(address2[key2]);
    twoKey.push(key2);
  }
  return oneKey === twoKey && oneProp === twoProp;
}

// are referencing the same object
console.log(areSame(address1, address2));

// the function below is incorrect
// function areSame(address1, address2) {
//   if (address1 === address2) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

// this is the correct way to do this function
function areSame(address1, address2) {
  return address1 === address2;
}

// ----- THEIR SOLUTION -----

// let address1 = new Address("Street", "City", "ZipCode");
// let address2 = new Address("Street", "City", "ZipCode");
// let address3 = address1;

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// console.log(areEqual(address1, address2));
// console.log(areSame(address1, address2));
// console.log(areSame(address1, address3));

// function areEqual(address1, address2) {
//   return (
//     address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
//   );
// }

// function areSame(address1, address2) {
//   return address1 === address2;
// }
