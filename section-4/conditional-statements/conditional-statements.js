// ----- IF CONDITIONAL -----

// Hour
// If hour is 6am to 12pm: Good morning!
// If hour is 12pm to 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 9;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

// ----- SWITCH CASE -----

let role = "guest";
// let role = "moderator";
// let role;

switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator User");
    break;
  default:
    console.log("Unknown User");
}

if (role === "guest") {
  console.log("Guest User");
} else if (role === "moderator") {
  console.log("Moderator User");
} else {
  console.log("Unknown User");
}
