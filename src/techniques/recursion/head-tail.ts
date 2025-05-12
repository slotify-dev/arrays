// 1. Sum of Array Elements
function sumArray(arr: number[]): number {
  // Base case: if the array is empty, return 0
  if (arr.length <= 0) return 0;

  // Recursive case: first element + sum of the rest
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([])); // 0 (valid - empty array)
console.log(sumArray([1, 2, 3])); // 6 (valid - normal case)
console.log(sumArray([-1, 0, 1])); // 0 (valid - negative numbers)

// 2. Product of Array Elements
function findMaximum(arr: number[]): number {
  // Base case: when array has single element
  if (arr.length <= 0) return 0;

  // compare it with the maximum of the rest of the array
  return Math.max(arr[0], findMaximum(arr.slice(1)));
}

console.log(findMaximum([3])); // 3 (valid - single element)
console.log(findMaximum([1, 5, 2])); // 5 (valid - normal case)
console.log(findMaximum([-1, -5, -2])); // -1 (valid - negative numbers)

// 3. Find target in Array
function contains(arr: number[], target: number): boolean {
  // Base case: if the array is empty, return false
  if (arr.length === 0) return false;

  // Recursive case: check if the first element is the target
  return arr[0] === target || contains(arr.slice(1), target);
}

// Test cases for contains
console.log(contains([], 1)); // false (valid - empty array)
console.log(contains([1, 2, 3], 2)); // true (valid - exists)
console.log(contains([1, 2, 3], 4)); // false (valid - doesn't exist)

// 4. Count occurrences of a target in Array
function countOccurrences(arr: number[], target: number): number {
  // Base case: if the array is empty, return 0
  if (arr.length === 0) return 0;

  // Recursive case: check if the first element is the target
  return (arr[0] === target ? 1 : 0) + countOccurrences(arr.slice(1), target);
}

// Test cases for countOccurrences
console.log(countOccurrences([], 1)); // 0 (valid - empty array)
console.log(countOccurrences([1, 2, 2, 3], 2)); // 2 (valid - multiple)
console.log(countOccurrences([1, 2, 3], 4)); // 0 (valid - none)

// 5. Reverse an Array
function reverseArray(arr: number[]): number[] {
  // Base case: if the array is empty, return an empty array
  if (arr.length === 0) return [];

  // Recursive case: reverse the rest of the array and append the first element
  return [...reverseArray(arr.slice(1)), arr[0]];
}

// Test cases for reverseArray
console.log(reverseArray([])); // [] (valid - empty)
console.log(reverseArray([1, 2, 3])); // [3, 2, 1] (valid - numbers)

// 6. Check if an Array is Sorted
function isSorted(arr: number[]): boolean {
  // Base case: if the array has 0 or 1 elements, it's sorted
  if (arr.length <= 1) return true;

  // Recursive case: check if the first two elements are in order and recurse on the rest
  return arr[0] <= arr[1] && isSorted(arr.slice(1));
}

// Test cases for isSorted
console.log(isSorted([])); // true (valid - empty)
console.log(isSorted([1, 2, 3])); // true (valid - sorted)
console.log(isSorted([3, 1, 2])); // false (valid - unsorted)

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

// Test cases for removeDuplicates
console.log(removeDuplicates([])); // [] (valid - empty)
console.log(removeDuplicates([1, 1, 2, 2, 3])); // [1, 2, 3] (valid - duplicates)
console.log(removeDuplicates([1, 2, 3])); // [1, 2, 3] (valid - no duplicates)

// 8. Check if a String is Palindrome
function isPalindrome(arr: string[]): boolean {
  // Base case: if the string has 0 or 1 characters, it's a palindrome
  if (arr.length <= 1) return true;

  // Recursive case: check if the first and last characters are the same
  return arr[0] === arr[arr.length - 1] && isPalindrome(arr.slice(1, -1));
}

// Test cases for isPalindrome
console.log(isPalindrome([])); // true (valid - empty)
console.log(isPalindrome(["a", "b", "a"])); // true (valid - palindrome)
console.log(isPalindrome(["a", "b", "c"])); // false (valid - not palindrome)

// 9. Rotate Array to the Right using Recursion
function rotateRight(arr: number[], k: number): number[] {
  // base case: if the array is empty or k is 0, return the array
  if (k === 0 || arr.length === 0) return arr;

  // Recursive case: move the last element to the front and rotate the rest
  return rotateRight([arr[arr.length - 1], ...arr.slice(0, -1)], k - 1);
}

// Test cases for rotateRight
console.log(rotateRight([1, 2, 3], 1)); // [3, 1, 2] (valid - rotate once)
console.log(rotateRight([1, 2, 3], 3)); // [1, 2, 3] (valid - full rotation)
console.log(rotateRight([], 1)); // [] (valid - empty array)

// 10. Find the Missing Number in an Array
function missingNumber(arr: number[], index: number = 0): number {
  // Base case: if the index is out of bounds, return the length of the array
  if (index >= arr.length) return arr.length;

  // Recursive case: check if the current index is not equal to the value at that index
  return arr[index] !== index ? index : missingNumber(arr, index + 1);
}

// Test cases for missingNumber
console.log(missingNumber([0, 1, 3])); // 2 (valid - missing in middle)
console.log(missingNumber([0, 1, 2])); // 3 (valid - missing at end)
console.log(missingNumber([])); // 0 (valid - empty array)
