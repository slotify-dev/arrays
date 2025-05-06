const nums = [1, 2, 3, 4, 5];

// map - transform each element
const squares = nums.map(n => n * n);
console.log(squares);  // [1, 4, 9, 16, 25]

// filter - select elements based on condition
const evens = nums.filter(n => n % 2 === 0);
console.log(evens);    // [2, 4]

// reduce - accumulate values
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);      // 15

// find - get first matching element
const firstEven = nums.find(n => n % 2 === 0);
console.log(firstEven); // 2

// some - check if any element matches
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven);   // true

// every - check if all elements match
const allEven = nums.every(n => n % 2 === 0);
console.log(allEven);   // false

// Array Manipulation
let letters = ['a', 'b', 'c', 'd'];

// Slice - get subarray (doesn't modify original)
const slice1 = letters.slice(1, 3);
console.log(slice1);  // ['b', 'c']
console.log(letters); // ['a', 'b', 'c', 'd']

// Splice - modify array (insert/remove)
letters.splice(1, 2, 'x', 'y');
console.log(letters); // ['a', 'x', 'y', 'd']

// Concatenate arrays
const moreLetters = letters.concat(['e', 'f']);
console.log(moreLetters); // ['a', 'x', 'y', 'd', 'e', 'f']

// Spread operator (alternative to concat)
const combined = [...letters, ...['g', 'h']];
console.log(combined); // ['a', 'x', 'y', 'd', 'g', 'h']


// Searching and Sorting
const names = ['John', 'Alice', 'Bob', 'Zoe'];

// Find index of element
const index = names.indexOf('Bob');
console.log(index);  // 2

// Check if array includes value
console.log(names.includes('Alice'));  // true

// Sort alphabetically
names.sort();
console.log(names);  // ['Alice', 'Bob', 'John', 'Zoe']

// Custom sort (numerical)
const ages = [23, 12, 45, 32];
ages.sort((a, b) => a - b);
console.log(ages);  // [12, 23, 32, 45]