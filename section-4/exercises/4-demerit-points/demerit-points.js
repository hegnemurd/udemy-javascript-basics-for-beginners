// 4 ----- DEMERIT POINTS -----

// ** My solution **

// speed limit = 70
// speed limit <= 70 => "ok" in console
// speed limit, every 5 unit up from 70 => 1 point
// 75 => "Point: 1" in console, 71...74 => "ok"
// Math.floor()
// 12 points or more => "License suspended" in console

// checkSpeed(100);

// function checkSpeed(speed) {
//   if (speed <= 74) {
//     console.log("Ok");
//   } else if (speed > 70) {
//     let points = Math.floor((speed - 70) / 5);
//     if (points < 12) {
//       console.log("Point: " + points);
//     } else if (points >= 12) {
//       console.log("License suspended");
//     }
//   }
// }

// ** Their solution **

// checkSpeed(70);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log("Ok");
//     return;
//   }
//   const points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("License suspended");
//   else console.log("Points: ", points);
// }

// MY IMPROVED SOLUTION

checkSpeed(70);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
  } else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points < 12) {
      console.log("Point: " + points);
    } else if (points >= 12) {
      console.log("License suspended");
    }
  }
}
