/**
 * Steps:
 * 1. Divide the array into two halves.
 * 2. Recursively sort each half.
 * 3. Merge the two sorted halves into a single sorted array.
 *
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 *
 * Space Complexity: O(n) (additional space for merging)
 */
function mergeSort(arr: number[]): number[] {
  // base case: for single or empty array
  if (arr.length <= 1) return arr;

  // divide: divide array
  const midIndex = Math.floor(arr.length / 2);

  // conquer: solve left/right part of the array
  const leftArr = mergeSort(arr.slice(0, midIndex)); // O(log n)
  const rightArr = mergeSort(arr.slice(midIndex));

  // combine: combine the solution
  return merge(leftArr, rightArr); // O(n)
}

function merge(leftArr: number[], rightArr: number[]): number[] {
  let i = 0;
  let j = 0;
  let result: number[] = [];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }

  return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}
