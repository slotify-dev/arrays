/* 
Problem: Longest Increasing consecutive subsequence
Given N elements, write a program that prints the length of the longest increasing consecutive subsequence.

Examples: 

Input : a[] = {3, 10, 3, 11, 4, 5, 6, 7, 8, 12} 
Output : 6 
Explanation: 3, 4, 5, 6, 7, 8 is the longest increasing subsequence whose adjacent element differs by one. 

Input : a[] = {6, 7, 8, 3, 4, 5, 9, 10} 
Output : 5 
Explanation: 6, 7, 8, 9, 10 is the longest increasing subsequence 
*/
function longestIncreasingConsecutiveSubsequence(arr: number[]): number {
  let maxLength = 0;

  const n = arr.length;
  const set = new Set<number>(arr);

  for (const num of arr) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
