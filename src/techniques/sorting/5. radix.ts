/**
 * Steps:
 * 1. Find the maximum number to determine the number of digits.
 * 2. Sort the numbers by each digit (from least significant to most significant).
 * 3. Use a stable sorting algorithm (e.g., Counting Sort) to sort by each digit.
 *
 * Time Complexity:
 * - Best: O(n * k) (where k is the number of digits)
 * - Average: O(n * k)
 * - Worst: O(n * k)
 *
 * Space Complexity: O(n + k) (additional space for Counting Sort)
 */
function radixSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSortByDigit(arr, exp);
  }
  return arr;
}

function countingSortByDigit(arr: number[], exp: number): void {
  const output: number[] = new Array(arr.length).fill(0);
  const count: number[] = new Array(10).fill(0);

  for (let num of arr) count[Math.floor(num / exp) % 10]++;
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  for (let i = 0; i < arr.length; i++) arr[i] = output[i];
}
