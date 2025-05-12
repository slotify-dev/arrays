// 1. Sum of Array Elements
function sumArray(arr: number[]): number {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }

  // Recursive case: first element + sum of the rest
  return arr[0] + sumArray(arr.slice(1));
}

// 2. Product of Array Elements
function findMaximum(arr: number[]): number {
  // Base case: when array has single element
  if (arr.length === 1) return arr[0];

  // compare it with the maximum of the rest of the array
  return Math.max(arr[0], findMaximum(arr.slice(1)));
}

// 3. Find target in Array
function contains(arr: number[], target: number): boolean {
  // Base case: if the array is empty, return false
  if (arr.length === 0) return false;

  // Recursive case: check if the first element is the target
  return arr[0] === target || contains(arr.slice(1), target);
}

// 4. Count occurrences of a target in Array
function countOccurrences(arr: number[], target: number): number {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) return 0;

  // Recursive case: check if the first element is the target
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

// 5. Reverse an Array
function reverseArray(arr: number[]): number[] {
  // Base case: if the array is empty, return an empty array
  if (arr.length === 0) return [];

  // Recursive case: reverse the rest of the array and append the first element
  return [...reverseArray(arr.slice(1)), arr[0]];
}

// 6. Check if an Array is Sorted
function isSorted(arr: number[]): boolean {
  // Base case: if the array has 0 or 1 elements, it's sorted
  if (arr.length <= 1) return true;

  // Recursive case: check if the first two elements are in order and recurse on the rest
  return arr[0] <= arr[1] && isSorted(arr.slice(1));
}

// 7. Remove Duplicates from Array
function removeDuplicates(arr: number[]): number[] {
  // Base case: if the array is empty, return an empty array
  if (arr.length === 0) return [];

  // Recursive case: check if the first element is a duplicate
  if (arr[0] === arr[1]) {
    return removeDuplicates(arr.slice(1));
  } else {
    return [arr[0], ...removeDuplicates(arr.slice(1))];
  }
}

// 8. Check if a String is Palindrome
function isPalindrome(arr: string[]): boolean {
  // Base case: if the string has 0 or 1 characters, it's a palindrome
  if (arr.length <= 1) return true;

  // Recursive case: check if the first and last characters are the same
  return arr[0] === arr[arr.length - 1] && isPalindrome(arr.slice(1, -1));
}

// 9. Rotate Array to the Right using Recursion
function rotateRight<T>(arr: number[], k: number): T[] {
  // base case: if the array is empty or k is 0, return the array
  if (k === 0) return arr;

  // Recursive case: move the last element to the front and rotate the rest
  return rotateRight([arr[arr.length - 1], ...arr.slice(0, -1)], k - 1);
}

// 10. Find the Missing Number in an Array
function missingNumber(arr: number[], index: number = 0): number {
  // Base case: if the index is out of bounds, return the length of the array
  if (index >= arr.length) return arr.length;

  // Recursive case: check if the current index is not equal to the value at that index
  return arr[index] !== index ? index : missingNumber(arr, index + 1);
}
