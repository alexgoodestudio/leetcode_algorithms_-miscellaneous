
// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
//------------------------------------------------------------


const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj).forEach((key) => {
  console.log("key",key,"----","value", obj[key]);
});

//------------------------------------------------------------

const obj2 = { a: 1, b: 2, c: 3 };

Object.entries(obj2).forEach(([key, value]) => {
  console.log("2:", key, value);
});

//-----------------------------------------------------------


// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false,
// };

// console.log("Object.entries",Object.entries(object1));
// console.log("Object.keys",Object.keys(object1))
// console.log("Object.values",Object.values(object1))

//-----------------------------------------------------------


// const object2 = {
//   a: 'start again with the basics',
//   b: 12345,
//   c: true,
// };

// const o = Object.values(object1)

