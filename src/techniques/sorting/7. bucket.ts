/**
 * Steps:
 * 1. Divide the input array into a number of buckets.
 * 2. Sort each bucket individually (using another sorting algorithm or recursively).
 * 3. Concatenate the sorted buckets to form the final sorted array.
 *
 * Time Complexity:
 * - Best: O(n + k) (where k is the number of buckets)
 * - Average: O(n + k)
 * - Worst: O(n^2) (if all elements are placed in a single bucket)
 *
 * Space Complexity: O(n + k) (additional space for buckets)
 */
function bucketSort(arr: number[], bucketSize: number = 5): number[] {
  if (arr.length === 0) return arr;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets: number[][] = new Array(bucketCount).fill([]).map(() => []);

  for (let num of arr) {
    const bucketIndex = Math.floor((num - min) / bucketSize);
    buckets[bucketIndex].push(num);
  }

  const sortedArray: number[] = [];
  for (let bucket of buckets) {
    insertionSort(bucket); // Sort each bucket
    sortedArray.push(...bucket);
  }

  return sortedArray;
}
