/*
    Technique: Two Pointers (Same Direction)
    Description: This technique is used when you need to compare elements in a single direction, often to find pairs or to filter elements.
    
    Usecases:
        1. Removing duplicates from a sorted array.
        2. Merging two sorted arrays.
        3. Finding the longest substring without repeating characters.
        4. Finding the maximum sum of a subarray of size k.
        5. Sliding window problems.
        6. Partitioning an array based on a condition.
        7. Finding the intersection of two arrays.
        8. Finding the longest increasing subsequence.
        9. Finding the longest common prefix.
        10. Finding the longest palindromic substring.
*/

// Example: Remove duplicates from sorted array
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let slow = 0;
    
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    
    return slow + 1;
}

const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const newLength = removeDuplicates(arr);
console.log(arr.slice(0, newLength)); // [1, 2, 3, 4, 5]