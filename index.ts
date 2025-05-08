// Technique: Single Pointer
// Time Complexity: O(n)
// Space Complexity: O(1)
function largest(arr: number[]): number {
  let max = arr[0]!;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Technique: Compare with next element
// Time Complexity: O(n)
// Space Complexity: O(n)
function findMax(arr, i) {
  // Last index returns the element
  if (i === arr.length - 1) {
    return arr[i];
  }

  // Find the maximum from the rest of the array
  let nextElement = findMax(arr, i + 1);

  // Compare with i-th element and return
  return Math.max(nextElement, arr[i]);
}
