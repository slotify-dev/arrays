/*

Problem: Max Distance Between Two Occurrences

Given an array arr[], the task is to find the maximum distance between two occurrences of any element. 
If no element occurs twice, return 0.

Examples:  

Input: arr = [1, 1, 2, 2, 2, 1]
Output: 5
Explanation: distance for 1 is: 5-0 = 5, distance for 2 is: 4-2 = 2, So max distance is 5.

Input : arr[] = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]
Output: 10
Explanation : Max distance for 2 is 11-1 = 10, max distance for 1 is 4-2 = 2 and max distance for 4 is 10-5 = 5  

Input: arr[] = [1, 2, 3, 6, 5, 4]
Output: 0
Explanation: No element has two occurrence, so maximum distance = 0.
*/
function maxDistance(arr: number[]): number {
  let maxDistance = 0;

  const map = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const firstIndex = map.get(arr[i])!;
      maxDistance = Math.max(maxDistance, i - firstIndex);
    } else {
      map.set(arr[i], i);
    }
  }

  return maxDistance;
}

// Example usage
const arr1 = [1, 1, 2, 2, 2, 1];
console.log(maxDistance(arr1)); // Output: 5
