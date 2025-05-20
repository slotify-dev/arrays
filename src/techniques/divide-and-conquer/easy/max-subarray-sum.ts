/*
Problem: Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray [4,-1,2,1])

Time Complexity: O(n log n)
Space Complexity: O(log n) due to recursion stack
*/

function maxSubArray(nums: number[]): number {
    // Base case: if array has only one element, return it
    if (nums.length === 1) return nums[0];
    
    // Divide: Split the array into two halves
    const mid = Math.floor(nums.length / 2);
    
    // Conquer: Recursively find max subarray in left and right halves
    const leftMax = maxSubArray(nums.slice(0, mid));
    const rightMax = maxSubArray(nums.slice(mid));
    
    // Combine: Find max crossing subarray that spans both halves
    let leftSum = -Infinity, rightSum = -Infinity, sum = 0;
    
    // Find maximum sum starting from mid-1 to left
    for (let i = mid - 1; i >= 0; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }
    
    sum = 0;
    // Find maximum sum starting from mid to right
    for (let i = mid; i < nums.length; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }
    
    // Return max of left half, right half, or crossing sum
    return Math.max(leftMax, rightMax, leftSum + rightSum);
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-2,-1])); // -1