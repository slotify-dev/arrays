/*
Problem: Non-overlapping sum of two sets
Given two arrays A[] and B[] of size n. It is given that both array individually contains distinct elements. We need to find the sum of all elements that are not common.

Examples: 

Input : A[] = {1, 5, 3, 8}
        B[] = {5, 4, 6, 7}
Output : 29
1 + 3 + 4 + 6 + 7 + 8 = 29

Input : A[] = {1, 5, 3, 8}
        B[] = {5, 1, 8, 3}
Output : 0
All elements are common.
*/
function nonOverlappingSum(A: number[], B: number[]): number {
  // Create a hash set to store elements of A
  const hashSet = new Set(A);

  // Initialize the sum variable
  let sum = 0;

  // Add elements of A to the sum if they are not in B
  for (const num of hashSet) {
    sum += num;
  }

  // Add elements of B to the sum if they are not in A
  for (const num of B) {
    if (!hashSet.has(num)) {
      sum += num;
    }
  }

  return sum;
}
