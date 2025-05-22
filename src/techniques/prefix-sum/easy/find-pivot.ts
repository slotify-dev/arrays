// Problem: Find the index where the sum of numbers to the left equals the sum to the right.
function pivotIndex(nums: number[]): number {
    let leftSum = 0;
        
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    
    return -1;
}