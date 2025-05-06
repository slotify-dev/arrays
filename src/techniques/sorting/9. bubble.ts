/**
 *
 * Bubble Sort: [Swap adjacent elements]
 *  - Swap adjacent elements if they are in the wrong order
 *  - Bubbling the largest element to the end in each pass
 *
 * Visulization:
 *  - Imagine a line of people with different heights.
 *  - You compare two people next to each other, and if the one on the left is taller, they swap places.
 *  - You keep doing this until everyone is in order.
 *
 * Time/Space:
 *  - Time:
 *      - Worst/Average Case O(n²): Nested loops compare/swaps all elements in every pass.
 *      - Best Case O(n): If the array is already sorted, we can optimize with a flag to exit early.
 *  - Space:
 *      - O(1): Sorts in-place, no extra memory needed
 */
function bubbleSort(numArr: number[]): number[] {
  const len = numArr.length;

  // imagine line of people with different heights
  for (let i = 0; i < len; i++) {
    // compare two people in line
    // with each pass last i elements are sorted already
    // to prevent going outof index bound we need len - 1
    for (let j = i; j < len - i - 1; j++) {
      if (numArr[i] > numArr[i + 1]) {
        [numArr[i], numArr[i + 1]] = [numArr[i + 1], numArr[i]];
      }
    }
  }

  return numArr;
}
