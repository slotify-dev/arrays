// Problem: For each index, find the absolute difference between left and right sums.

function leftRightDifference(nums: number[]): number[] {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    
    // Calculate left sums
    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i-1] + nums[i-1];
    }
    
    // Calculate right sums
    for (let i = n-2; i >= 0; i--) {
        rightSum[i] = rightSum[i+1] + nums[i+1];
    }
    
    // Calculate differences
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(Math.abs(leftSum[i] - rightSum[i]));
    }
    
    return answer;
}