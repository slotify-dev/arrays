/**
 * Selection Sort [Select smallest & swap]
 *  - Find the smallest element in the unsorted part of the array and swap it with the first unsorted element.
 *
 * Visulization:
 *  - Imagine a line of playing cards face down.
 *  - You look through all the cards to find the smallest one and swap it with the first card.
 *  - Repeat for the remaining cards.
 *
 * Time/Space:
 *  - Time:
 *      - Worst O(n*n): Even if the array is sorted, it scans the entire unsorted part to find the minimum
 *  - Space:
 *      - O(1): Sorts in-place, no extra memory needed
 */
function selectionSort(numArr: number[]): number[] {
  const len = numArr.length;

  // imagine a line of cards facing down
  for (let i = 0; i < len; i++) {
    // imagine current i is smallest
    let smallest = i;

    // You look through all the cards to find the smallest one
    for (let j = i + 1; j < len; j++) {
      if (numArr[smallest] > numArr[j]) {
        smallest = i;
      }
    }

    // swipe it with the first card when we find smallest card
    [numArr[i], numArr[smallest]] = [numArr[smallest], numArr[i]];
  }

  return numArr;
}
