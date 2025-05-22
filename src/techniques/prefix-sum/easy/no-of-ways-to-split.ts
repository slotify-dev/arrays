// Problem: Count the number of ways to split the array into two parts with left sum ≥ right sum.

function waysToSplitArray(nums: number[]): number {
    const prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefix.push(prefix[i-1] + nums[i]);
    }
    
    const totalSum = prefix[prefix.length-1];
    let count = 0;
    
    for (let i = 0; i < nums.length-1; i++) {
        const leftSum = prefix[i];
        const rightSum = totalSum - leftSum;
        if (leftSum >= rightSum) {
            count++;
        }
    }
    
    return count;
}