/*
Problem: k-th distinct (or non-repeating) element among unique elements in an array.

Given an integer array arr[], print kth distinct element in this array. 
The given array may contain duplicates and the output should print the k-th element among all unique elements. 
If k is more than the number of distinct elements, print -1.

Examples:

Input: arr[] = {1, 2, 1, 3, 4, 2},  k = 2
Output: 4
Explanation: The First non-repeating element is 3 and the Second non-repeating element is 4

Input: {2, 2, 2, 2},  k = 2
Output: -1
Explanation: There is no distinct (non-repeating) element in the array. 


Input: arr[] = {1, 2, 50, 10, 20, 2}, k = 3
Output: The First non-repeating element is 1 and the Second non-repeating element is 10. 
*/
function kthDistinct(arr: number[], k: number): number {
  const countMap = new Map<number, number>();

  // Count occurrences of each element
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let distinctCount = 0;

  // Find the k-th distinct element
  for (const [num, count] of countMap.entries()) {
    if (count === 1) {
      distinctCount++;
      if (distinctCount === k) {
        return num; // Return the k-th distinct element
      }
    }
  }

  return -1; // If k is more than the number of distinct elements
}
