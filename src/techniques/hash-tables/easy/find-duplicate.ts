/*
Problem: Find the Repetitive Element

Given an array arr[] of size n filled with numbers from 1 to n-1 in random order. 
The array has only one repetitive element. 
The task is to find the repetitive element.

Examples:

Input: arr[] = [1, 3, 2, 3, 4]
Output: 3
Explanation: The number 3 is the only repeating element.


Input: arr[] = [1, 5, 1, 2, 3, 4]
Output: 1
Explanation: The number 1 is the only repeating element.


*/
function findDuplicate(arr: number[]): number {
  const seen = new Set<number>();

  for (const num of arr) {
    if (seen.has(num)) {
      return num; // Found the duplicate
    }
    seen.add(num);
  }

  return -1; // No duplicate found
}
