/* 
Problem: Check for Disjoint Arrays or Sets
Given two arrays a and b, check if they are disjoint, i.e., there is no element common between both the arrays.

Examples:

Input: a[] = {12, 34, 11, 9, 3}, b[] = {2, 1, 3, 5} 
Output: False
Explanation: 3 is common in both the arrays.


Input: a[] = {12, 34, 11, 9, 3}, b[] = {7, 2, 1, 5} 
Output: True 
Explanation: There is no common element in both the sets.
*/
function areDisjoint(a: number[], b: number[]): boolean {
  const setA = new Set(a);
  const setB = new Set(b);

  for (const num of setB) {
    if (setA.has(num)) {
      return false; // Found a common element
    }
  }

  return true; // No common elements found
}
