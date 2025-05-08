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
  if (arr.length <= 1) return arr;

  // divide
  const pivot = arr[0]!;

  // conquer: solve left and right array
  const left: number[] = arr.filter((num) => num < pivot);
  const right: number[] = arr.filter((num) => num > pivot);

  // combine: combine left, pivot and right array elements
  return [...quickSort(left), pivot, ...quickSort(right)];
}
