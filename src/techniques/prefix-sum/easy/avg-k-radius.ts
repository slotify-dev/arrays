// Problem: For each element, return the average of elements within k radius.

function getAverages(nums: number[], k: number): number[] {
    const n = nums.length;
    const prefix = new Array(n+1).fill(0);
    const result = new Array(n).fill(-1);
    
    for (let i = 0; i < n; i++) {
        prefix[i+1] = prefix[i] + nums[i];
    }
    
    for (let i = k; i < n - k; i++) {
        const sum = prefix[i+k+1] - prefix[i-k];
        result[i] = Math.floor(sum / (2*k + 1));
    }
    
    return result;
}