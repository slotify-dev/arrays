/*
Problem: 2 Sum – Count pairs with given sum
Given an array arr[] of n integers and a target value, the task is to find the number of pairs of integers in the array whose sum is equal to target.

Examples:  

Input: arr[] = {1, 5, 7, -1, 5}, target = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).         

Input: arr[] = {1, 1, 1, 1}, target = 2
Output:  6
Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1) and (1, 1).

Input: arr[] = {10, 12, 10, 15, -1}, target = 125
Output:  0
*/
function countPairSet(arr: number[], target: number): number {
  const seen = new Set<number>();
  let count = 0;

  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      count++;
    }
    seen.add(num);
  }

  return count;
}

function countPairsMap(arr: number[], target: number): number {
  const freq = new Map();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if the complement (target - arr[i])
    // exists in the map. If yes, increment count
    if (freq.has(target - arr[i])) {
      count += freq.get(target - arr[i]);
    }

    // Increment the frequency of arr[i]
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }
  return count;
}
