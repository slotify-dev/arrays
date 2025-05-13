/*
Problem: 

Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. 
This problem is a variation of 2Sum problem.

Examples: 

Input: arr[] = [0, -1, 2, -3, 1], target = -2
Output: true
Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.


Input: arr[] = [1, -2, 1, 0, 5], target = 0
Output: false
Explanation: There is no pair with sum equals to given target.

*/
function twoSum(arr: number[], target: number): boolean {
  // Create a hash set to store the elements
  const hashSet = new Set<number>();

  // Iterate through the array
  for (const num of arr) {
    // Calculate the complement
    const complement = target - num;

    // Check if the complement exists in the hash set
    if (hashSet.has(complement)) {
      return true; // Found a pair with the given sum
    }

    // Add the current number to the hash set
    hashSet.add(num);
  }

  return false; // No pair found with the given sum
}
