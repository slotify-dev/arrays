/**
 * Steps:
 * 1. Start with the second element (assume the first element is sorted).
 * 2. Compare the current element with the previous elements in the sorted portion.
 * 3. Shift all elements greater than the current element to the right.
 * 4. Insert the current element into its correct position in the sorted portion.
 * 5. Repeat steps 2-4 for all elements in the array.
 *
 * Time Complexity:
 * - Best: O(n) (when the array is already sorted)
 * - Average: O(n^2)
 * - Worst: O(n^2)
 *
 * Space Complexity: O(1) (in-place sorting)
 */
function insertionSort(numArr: number[]): void {
  const len = numArr.length;

  // start at index: 1
  for (let i = 1; i < len; i++) {
    // you pick one cart at a time
    const currentPosition = numArr[i];

    // get previous position
    let prevPosition = i - 1;

    // Start comparing with the previous element
    while (prevPosition >= 0 && numArr[prevPosition] > currentPosition) {
      numArr[prevPosition + 1] = numArr[prevPosition]; // Shift right
      prevPosition--;
    }

    // insert current in the correct position
    numArr[prevPosition + 1] = currentPosition;
  }
}
