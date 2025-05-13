/*
Problem: Longest Subarray with 0 Sum
Given an array arr[] of size n, the task is to find the length of the longest subarray with sum equal to 0.

Examples:

Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23}
Output: 5
Explanation: The longest subarray with sum equals to 0 is {-2, 2, -8, 1, 7}


Input: arr[] = {1, 2, 3}
Output: 0
Explanation: There is no subarray with 0 sum


Input:  arr[] = {1, 0, 3}
Output:  1
Explanation: The longest sub-array with sum equal to 0 is {0}

*/
function longestSubarrayWithZeroSum(arr: number[]): number {
  const n = arr.length;
  const map = new Map<number, number>();

  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // If the sum is zero, update maxLength
    if (sum === 0) {
      maxLength = i + 1;
    }

    // If the sum has been seen before, update maxLength
    if (map.has(sum)) {
      maxLength = Math.max(maxLength, i - map.get(sum)!);
    } else {
      map.set(sum, i);
    }
  }

  return maxLength;
}
