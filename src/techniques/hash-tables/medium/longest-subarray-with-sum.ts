/*
Problem: Longest Subarray With Sum Divisible By K
Given an arr[] containing n integers and a positive integer k, he problem is to find the longest subarray’s length with the sum of the elements divisible by k.

Examples:

Input: arr[] = [2, 7, 6, 1, 4, 5], k = 3
Output: 4
Explanation: The subarray [7, 6, 1, 4] has sum = 18, which is divisible by 3.


Input: arr[] = [-2, 2, -5, 12, -11, -1, 7], k = 3
Output: 5
Explanation: The subarray [2, -5, 12, -11, -1], has sum = -3, which is divisible by 3.


Input: arr[] = [1, 2, -2], k = 5
Output: 2
Explanation: The subarray is [2, -2] with sum = 0, which is divisible by 2.
*/
function bruteForceApproach(arr, k) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    // Initialize sum for the current subarray
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      // Add the current element to the subarray sum
      sum = (sum + arr[j]) % k;

      // Update max length if sum is divisible by k
      if (sum === 0) res = Math.max(res, j - i + 1);
    }
  }
  return res;
}

function slidingWindowApproach(arr: number[], k: number): number {
  const n = arr.length;
  const map = new Map<number, number>();

  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    // If the sum is divisible by k, update maxLength
    if (sum % k === 0) {
      maxLength = i + 1;
    }

    // If the sum is not divisible by k, check if it exists in the map
    if (map.has(sum % k)) {
      maxLength = Math.max(maxLength, i - map.get(sum % k)!);
    } else {
      map.set(sum % k, i);
    }
  }

  return maxLength;
}

function longestSubarrayDivK(arr, k) {
  let n = arr.length;
  let prefIdx = new Map();

  let sum = 0;
  let maxLength = 0;

  // Iterate over all ending points
  for (let i = 0; i < n; i++) {
    // prefix sum mod k (handling negative prefix sum)
    sum = (((sum + arr[i]) % k) + k) % k;

    // If sum == 0, then update result with the
    // length of subarray arr[0...i]
    if (sum === 0) {
      maxLength = i + 1;
    }

    // Update max length for repeating sum
    else if (prefIdx.has(sum)) {
      maxLength = Math.max(maxLength, i - prefIdx.get(sum));
    }

    // Store the first occurrence of sum
    else {
      prefIdx.set(sum, i);
    }
  }

  return maxLength;
}
