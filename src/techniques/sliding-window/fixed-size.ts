// Example: Find maximum sum of any subarray of size k
function maxSubarraySum(nums: number[], k: number): number {
    if (nums.length < k) return -1;
    
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate initial window sum
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24 (10+2+3+20)