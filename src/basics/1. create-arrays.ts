// number type array
const numArr: number[] = new Array(1, 2, 3);
console.log("numArr", numArr);

// boolean type array
const booleanArr: boolean[] = [true, false, true];
console.log("booleanArr", numArr);

// fixed size emptry array
const fixedEmptyArray = new Array(5);
console.log("fixedEmptyArray", fixedEmptyArray);

// empty string array length: 0
const emptyArray: string[] = [];
console.log("emptyArray", emptyArray);

// array with filled values or elements
const filledArray = new Array(3).fill(0);
console.log("filledArray", filledArray);

// tuples: mixed array
const mixedArray: (string | number | boolean)[] = ["text", 42, true];
console.log("mixedArray", mixedArray);

// array with iterable
const fromIterable = Array.from([1, 2, 2, 3]);
console.log("fromIterable", fromIterable);

// array from json values
const jsonArray = JSON.parse('[1, "two", false]');
console.log("jsonArray", jsonArray);

// array from object
const entriesArray = Array.from(Object.entries({ a: 1, b: 2 }));
console.log("entriesArray", entriesArray);

// multi dimentional array
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];
console.log("matrix", matrix);

// array using spread operator
const spreadArray = [...[1, 2], ...[3, 4]];
console.log("spreadArray", spreadArray);
