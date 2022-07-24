// ----- ARITHMETIC OPERATORS -----

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)
// console.log(++x);
// console.log(x);
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log(--y);
// console.log(y);
// console.log(y--);
// console.log(y);

// ----- ASSIGNMENT OPERATORS -----

// let x = 10;
// console.log(x);

// x = x + 5;
// x += 5;
// console.log(x);

// x = x * 3;
// x *= 3;
// console.log(x);

// ----- COMPARISON OPERATORS -----

// let x = 1;

// Relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// Equality
// console.log(x === 1);
// console.log(x !== 1);

// ----- EQUALITY OPERATORS -----

// String equality (Type + Value)
// console.log(1 === 1);
// console.log("3" === 3);

// Lose equality
// console.log(1 == 1);
// console.log("3" == 3);
// console.log("Value" == 3);
// console.log("Value" == "Value");
// console.log(true == 1);
// console.log(true == 3);

// ----- TERNARY OPERATORS -----

// If a customer has more than 100 points, they are a "gold" customer, otherwise they are a "silver" customer
// let points = 110;
// let type = points > 100 ? "Gold" : "Silver";

// console.log(type);

// ----- LOGICAL OPERATORS WITH BOOLEANS -----

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && true);
// console.log(false && true);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;

// console.log(eligibleForLoan);

// Logical NOT (!)

// let highIncome = false;
// let highIncome = true;
// let goodCreditScore = false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log("Eligible", eligibleForLoan);

// let applicationRefused = !eligibleForLoan;

// console.log("Application Refused", applicationRefused);

// ----- LOGICAL OPERATORS WITH NON-BOOLEANS -----

// Falsy (false)
// undefined, null, 0, false, "", NaN

// Anything that is not Falsy is a Truthy
// false || true, returns true
// false || "Potato", returns "Potato"

// Short-circuting
// false || 1 || 2, returns 2

// let userColour = "";
// // let userColour = "red";
// let defaultColour = "blue";
// let currentColour = userColour || defaultColour;

// console.log(currentColour);

// ----- BITWISE OPERATORS -----

// 1 = 00000001 - 8-bits
// 2 = 00000010
// 3 = 00000011
// 0 = 00000000

// console.log(1 | 2); // Bitwise OR
// console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100
// 00000010
// 00000001

// const readPermission = 4;
// const writePermission = 2;
// const executePermission = 1;
// let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
// myPermission = myPermission | writePermission;

// let message = myPermission & readPermission ? "yes" : "no";

// console.log(message);

// ----- OPERATOR PRECENDENCE -----

// let x = 2 + 3 * 4; // 3 * 4 = 12, 12 + 2 = 14, x = 14
// let x = (2 + 3) * 4; // 2 + 3 = 5, 5 * 4 = 20, x = 20
// console.log(x);
