/*
Problem: Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[]. 
Both arrays are not sorted, and elements are distinct.

Input: a[] = [11, 1, 13, 21, 3, 7], b[] = [11, 3, 7, 1] 
Output: true

Input: a[]= [1, 2, 3, 4, 5, 6], b = [1, 2, 4] 
Output: true

Input: a[] = [10, 5, 2, 23, 19], b = [19, 5, 3] 
Output: false

Technique: 
    - We can use a hash set to store elements of a[], this will help us in constant time complexity searching. 
    - We first insert all elements of a[] into a hash set. 
    - Then, for each element in b[], we check if it exists in the hash set.
*/
function isSubset(a: number[], b: number[]): boolean {
  // Create a hash set and insert all elements of a
  const hashSet = new Set(a);

  // Check each element of b in the hash set
  for (const num of b) {
    if (!hashSet.has(num)) {
      return false;
    }
  }

  // If all elements of b are found in the hash set
  return true;
}
