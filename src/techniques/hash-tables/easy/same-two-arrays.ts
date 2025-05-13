/* 
Problem: Check if two arrays are equal or not
Given two arrays, a and b of equal length. The task is to determine if the given arrays are equal or not. Two arrays are considered equal if:

Both arrays contain the same set of elements.
The arrangements (or permutations) of elements may be different.
If there are repeated elements, the counts of each element must be the same in both arrays.
Examples: 

Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
Output: true

Input: a[] = [1, 2, 5, 4, 0, 2, 1], b[] = [2, 4, 5, 0, 1, 1, 2] 
Output: true

 Input: a[] = [1, 7, 1], b[] = [7, 7, 1]
Output: false
*/
function areArraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) {
    return false; // Arrays are not equal if lengths differ
  }

  const countMapOfA = new Map<number, number>();

  for (const num of a) {
    countMapOfA.set(num, (countMapOfA.get(num) || 0) + 1);
  }

  for (const num of b) {
    if (!countMapOfA.has(num)) {
      return false; // Element in b not found in a
    }

    const count = countMapOfA.get(num)!;

    if (count === 1) {
      countMapOfA.delete(num); // Remove the element if its count is 1
    } else {
      countMapOfA.set(num, count - 1); // Decrease the count
    }
  }

  return countMapOfA.size === 0; // If all counts are zero, arrays are equal
}
