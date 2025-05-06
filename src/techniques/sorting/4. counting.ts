/**
 * Steps:
 * 1. Find the range of the input array (min and max values).
 * 2. Create a count array to store the frequency of each element.
 * 3. Modify the count array to store the cumulative frequency.
 * 4. Use the count array to place elements in their correct position in the output array.
 *
 * Time Complexity:
 * - Best for: Small integer ranges (e.g., 0 to 100).
 * - Best: O(n + k) (where k is the range of input)
 * - Average: O(n + k)
 * - Worst: O(n + k)
 *
 * Space Complexity: O(k) (additional space for the count array)
 */
function countSort(arr: number[]): number[] {
  const n = arr.length;
  if (n <= 1) return arr; // Already sorted if empty or single element

  let min = arr[0];
  let max = arr[0];

  // Step 1: Find the range (min & max)
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  // Step 2: Initialize count array
  const range = max - min + 1;
  const output = new Array(n).fill(0);
  const count = new Array(range).fill(0);

  // Step 3: Store count of each element
  for (let i = 0; i < n; i++) {
    count[arr[i] - min]++;
  }

  // Step 4: Modify count to cumulative counts (for stable sorting)
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
  }

  // Step 5: Build the output array (traverse input in reverse for stability)
  for (let i = n - 1; i >= 0; i--) {
    const num = arr[i];
    const pos = count[num - min] - 1; // Correct position in output

    output[pos] = num;
    count[num - min]--; // Decrease count for next occurrence
  }

  return output;
}
