// ----- ENUMERATING PROPERTIES OF AN OBJECT -----

const circle = {
    radius: 1,
    draw() {
      console.log("draw");
    },
  };
  
  for (let key in circle) {
    console.log(key, circle[key]);
  }
  
  // for (let key of circle) { // not iterable
  //   console.log(key);
  // }
  
  for (let key of Object.keys(circle)) {
    console.log(key);
  }
  
  for (let entry of Object.entries(circle)) {
    console.log(entry);
  }
  
  if ("radius" in circle) console.log("yes");
  
  // function Object() {}
  // const x = { value: 1 }; // this gets translated to -
  // const x = new Object(); // -this
  