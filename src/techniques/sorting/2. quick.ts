/**
 * Steps:
 * 1. Choose a pivot element from the array.
 * 2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
 * 3. Recursively apply Quick Sort to the two sub-arrays.
 * 4. Combine the sorted sub-arrays and the pivot to form the final sorted array.
 *
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n^2) (when the pivot is the smallest or largest element)
 *
 * Space Complexity: O(log n) (due to recursion stack)
 */
function quickSort(arr: number[]): number[] {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot (here we pick the first element)
  const pivot = arr[0];

  // 2 calls per level = log n levels
  // n comparisons per level = n log n
  // Divide: Partition into left (<= pivot) and right (> pivot) using filter
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);

  // Conquer: Recursively sort left and right
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Combine: Concatenate left + equal + right
  return [...sortedLeft, ...pivot, ...sortedRight];
}
