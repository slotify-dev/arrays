/*
Problem: Find all pairs (a, b) in an array such that a % b = k
Given an array with distinct elements, the task is to find the pairs in the array such that a % b = k, where k is a given integer. You may assume that a and b are in small range

Examples : 

Input  :  arr[] = {2, 3, 5, 4, 7}  k = 3
Output :  [(7, 4), (3, 4), (3, 5), (3, 7)]

Input: arr[] = [1, 2], k = 3
Output: 0
Explanation: No pairs give remainder 3.
*/
function findPairs(arr: number[], k: number): [number, number][] {
  const seen = new Set<number>();
  const pairs: [number, number][] = [];

  for (const a of arr) {
    for (const b of arr) {
      if (a !== b && a % b === k) {
        pairs.push([a, b]);
      }
    }
    seen.add(a);
  }

  return pairs;
}
