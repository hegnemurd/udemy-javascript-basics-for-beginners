// ----- FUNCTION DECLARATIONS VS EXPRESSIONS -----

// Function Declaration

function walk() {
  console.log("walk");
}

// Function Expression -->

// Anonymous
let run = function () {
  console.log("run");
};
let move = run;
run();
move();

// Named
let skip = function skip() {
  console.log("skip");
};
