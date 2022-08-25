// ----- MY SOLUTION -----

// circle obj, obj literal syntax
// circle.radius = 2;
// circle.area = 20; // cannot do - read only property
// console.log(circle.area); // can be done

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

// ----- THEIR SOLUTION -----

// const circle = {
//     radius: 2,
//     get area() {
//       return Math.PI * this.radius * this.radius;
//     },
//   };

//   console.log(circle.area);
