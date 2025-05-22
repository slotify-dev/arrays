// Problem: Return the running sum of an array.
function runningSum(nums: number[]): number[] {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix[i-1] + nums[i]);
    }
    return prefix;
}