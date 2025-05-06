// Example: Find smallest subarray with sum ≥ target
function minSubarrayLen(nums: number[], target: number): number {
    let minLength = Infinity;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        windowSum += nums[right];
        
        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            windowSum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 ([4,3])