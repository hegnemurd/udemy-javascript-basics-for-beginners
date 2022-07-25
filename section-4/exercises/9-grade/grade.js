// ** My solution **

// Average = 70
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  for (let i in marks) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  if (average >= 0 && average <= 59) {
    return "F";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  }
}

// ** Their solution **
// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);
//   if (average < 60) return "F";
//   if (average < 70) return "D";
//   if (average < 80) return "C";
//   if (average < 90) return "B";
//   return "A";
// }

// function calculateAverage(array) {
//   let sum = 0;
//   for (let value of array) sum += value;
//   return sum / array.length;
// }
