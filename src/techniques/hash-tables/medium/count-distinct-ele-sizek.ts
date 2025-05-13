/*
Problem: Count Distinct Elements In Every Window of Size K
Given an array arr[] of size n and an integer k, return the count of distinct numbers in all windows of size k. 

Examples: 

Input: arr[] = [1, 2, 1, 3, 4, 2, 3], k = 4
Output: [3, 4, 4, 3]
Explanation: First window is [1, 2, 1, 3], count of distinct numbers is 3.
                      Second window is [2, 1, 3, 4] count of distinct numbers is 4.
                      Third window is [1, 3, 4, 2] count of distinct numbers is 4.
                      Fourth window is [3, 4, 2, 3] count of distinct numbers is 3.

Input: arr[] = [4, 1, 1], k = 2
Output: [2, 1]
Explanation: First window is [4, 1], count of distinct numbers is 2.
                      Second window is [1, 1], count of distinct numbers is 1.
*/
function countDistinctElements(arr: number[], k: number): number[] {
  const n = arr.length;
  const result: number[] = [];
  const freq = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    // Add the new element to the frequency map
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);

    // Remove the element that is sliding out of the window
    freq.set(arr[i - k], freq.get(arr[i - k]) - 1);

    // If the frequency of arr[i - k] becomes 0, remove it from the map
    if (freq.get(arr[i - k]) === 0) {
      freq.delete(arr[i - k]);
    }

    // Store the count of distinct elements in the current window
    res.push(freq.size);
  }

  return result;
}
