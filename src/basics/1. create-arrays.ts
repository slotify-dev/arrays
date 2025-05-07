// array with primitive values
const numArr: number[] = new Array(1, 2, 3);
const booleanArr: boolean[] = [true, false, true];

// empty array with size: n = 5
const dynamicArray = new Array(5);

// empty string array length: 0
const emptyArray: string[] = [];

// array with filled values or elements
const filledArray = new Array(3).fill(0); // [0, 0, 0]

// tuples: mixed array
const mixedArray: (string | number | boolean)[] = ["text", 42, true];

// array with iterable
const fromIterable = Array.from([1, 2, 2, 3]); // [1, 2, 3]

// array from json values
const jsonArray = JSON.parse('[1, "two", false]');

// array from object
const entriesArray = Array.from(Object.entries({ a: 1, b: 2 }));

// multi dimentional array
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// array using spread operator
const spreadArray = [...[1, 2], ...[3, 4]]; // [1,2,3,4]
