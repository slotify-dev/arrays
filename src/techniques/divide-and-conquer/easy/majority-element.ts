/*
Problem: Find the majority element that appears more than n/2 times in an array.
Example:

Input: [2,2,1,1,1,2,2]
Output: 2

Time Complexity: O(n log n)
Space Complexity: O(log n) due to recursion
*/

function majorityElement(nums: number[]): number {
    // Base case: array of size 1 has majority element
    if (nums.length === 1) return nums[0];
    
    // Divide: Split the array into two halves
    const mid = Math.floor(nums.length / 2);
    
    // Conquer: Recursively find majority elements in left and right
    const leftMaj = majorityElement(nums.slice(0, mid));
    const rightMaj = majorityElement(nums.slice(mid));
    
    // Combine: If both halves agree on majority, return it
    if (leftMaj === rightMaj) return leftMaj;
    
    // Otherwise, count which one appears more in the combined array
    const leftCount = nums.filter(num => num === leftMaj).length;
    const rightCount = nums.filter(num => num === rightMaj).length;
    
    return leftCount > rightCount ? leftMaj : rightMaj;
}

// Test cases
console.log(majorityElement([2,2,1,1,1,2,2])); // 2
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([1])); // 1
console.log(majorityElement([1,1,2,2,2])); // 2
console.log(majorityElement([1,2,1,2,1])); // 1