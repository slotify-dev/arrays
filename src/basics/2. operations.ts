/*
Let's learn how to perform operations on arrays.

We will implement the following operations:
- push() - Add to End
- pop() - Remove from End
- unshift() - Add to Start
- shift() - Remove from Start
- concat() - Combine Arrays
- slice() - Copy Portion of Array
- indexOf() - Find Element Index
- reverse() - Reverse Array
- includes() - Check for Element
- splice() - Remove/Insert Elements

Without using the built-in array methods.
*/

// push() - Add to End
// Time Complexity: O(1)
// Space Complexity: O(1)
// push(arr, 5); // arr becomes [1, 2, 3, 4, 5]
function push<T>(arr: T[], element: T): number {
  arr[arr.length] = element;
  return arr.length;
}

// pop() - Remove from End
// Time Complexity: O(1)
// Space Complexity: O(1)
// pop(arr); // arr becomes [1, 2, 3, 4]
function pop<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

// unshift() - Add to Start
// Time Complexity: O(n)
// Space Complexity: O(1)
// unshift(arr, 0); // arr becomes [0, 1, 2, 3, 4]
function unshift<T>(arr: T[], element: T): number {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr.length;
}

// shift() - Remove from Start
// Time Complexity: O(n)
// Space Complexity: O(1)
// shift(arr); // arr becomes [2, 3, 4]
function shift<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const first = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return first;
}

// concat() - Combine Arrays
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
// concat(arr1, arr2); // [1, 2, 3, 4, 5, 6]
function concat<T>(arr1: T[], arr2: T[]): T[] {
  const newArr: T[] = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr[newArr.length] = arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr[newArr.length] = arr2[i];
  }
  return newArr;
}

// slice() - Copy Portion of Array
// Time Complexity: O(n)
// Space Complexity: O(n)
// slice(arr, 1, 3); // [2, 3]
function slice<T>(arr: T[], start: number, end = arr.length): T[] {
  const result: T[] = [];
  for (let i = start; i < end && i < arr.length; i++) {
    result[result.length] = arr[i];
  }
  return result;
}

// indexOf() - Find Element Index
// Time Complexity: O(n)
// Space Complexity: O(1)
// indexOf(arr, 3); // 1
function indexOf<T>(arr: T[], element: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}

// reverse() - Reverse Array
// Time Complexity: O(n)
// Space Complexity: O(1)
// reverse(arr); // arr becomes [4, 3, 2, 1]
function reverse<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result[result.length] = arr[i];
  }
  return result;
}

// includes() - Check for Element
// Time Complexity: O(n)
// Space Complexity: O(1)
// includes(arr, 3); // true
function includes<T>(arr: T[], element: T): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return true;
  }
  return false;
}

// splice() - Remove/Insert Elements
// Time Complexity: O(n)
// Space Complexity: O(n)
// splice(arr, 1, 2, 99); // arr becomes [1, 99, 4]
function splice<T>(
  arr: T[],
  start: number,
  deleteCount: number,
  ...items: T[]
): T[] {
  const newArr: T[] = [];
  const removed: T[] = [];

  // Copy elements before start
  for (let i = 0; i < start; i++) {
    newArr[newArr.length] = arr[i];
  }

  // Add new items
  for (const item of items) {
    newArr[newArr.length] = item;
  }

  // Copy elements after deletion
  for (let i = start + deleteCount; i < arr.length; i++) {
    newArr[newArr.length] = arr[i];
  }

  // Update original array
  arr.length = 0;
  for (let i = 0; i < newArr.length; i++) {
    arr[i] = newArr[i];
  }

  return removed;
}
