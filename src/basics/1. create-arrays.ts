// A - Array constructor with elements
const arrayConstructor: number[] = new Array(1, 2, 3);

// B - Boolean array initialization
const booleanArray: boolean[] = [true, false, true];

// C - Custom class instances array
class Person {
  constructor(public name: string) {}
}
const classArray: Person[] = [new Person('Alice'), new Person('Bob')];

// D - Dynamic length array (empty slots)
const dynamicArray = new Array(5); // length=5 but empty slots

// E - Empty array with type
const emptyArray: string[] = [];

// F - Filled array (uniform values)
const filledArray = new Array(3).fill(0); // [0, 0, 0]

// G - Generic array type
const genericArray: Array<number> = [1, 2, 3];

// H - Heterogeneous typed array
const mixedArray: (string | number | boolean)[] = ['text', 42, true];

// I - Iterable to array (from Set)
const fromIterable = Array.from([1, 2, 2, 3]); // [1, 2, 3]

// J - JSON parsed array
const jsonArray = JSON.parse('[1, "two", false]');

// K - Key-value pairs array (entries)
const entriesArray = Array.from(Object.entries({ a: 1, b: 2 }));

// L - Literal array declaration
const literalArray = [1, 2, 3];

// M - Multi-dimensional array
const matrix: number[][] = [[1, 2], [3, 4]];

// N - Numeric range array
const rangeArray = Array.from({ length: 5 }, (_, i) => i + 1); // [1,2,3,4,5]

// O - Object values array
const valuesArray = Object.values({ a: 1, b: 2 });

// P - Pre-allocated buffer (typed array)
const typedArray = new Int32Array(10);

// R - Readonly array
const readonlyArr: readonly number[] = [1, 2, 3];

// S - Spread operator array
const spreadArray = [...[1, 2], ...[3, 4]]; // [1,2,3,4]

// T - Tuple (fixed-type array)
const tuple: [string, number] = ['age', 30];

// U - Union typed array
const unionArray: (string | null)[] = ['text', null, 'more'];

// V - Variable-length arguments
function createArray<T>(...items: T[]): T[] {
  return items;
}
const varArgsArray = createArray(1, 2, 3);

// W - With array-like object
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
const fromArrayLike = Array.from(arrayLike); // ['a', 'b']

