/*
Problem: Search for a target value in a rotated sorted array.

Example:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Time Complexity: O(log n)
Space Complexity: O(log n) due to recursion
*/

function search(nums: number[], target: number): number {
    function binarySearch(l: number, r: number): number {
        if (l > r) return -1;
        
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;
        
        // Check if left half is sorted
        if (nums[l] <= nums[mid]) {
            // If target is in the sorted left half
            if (nums[l] <= target && target < nums[mid]) {
                return binarySearch(l, mid - 1);
            } else {
                return binarySearch(mid + 1, r);
            }
        } 
        // Right half must be sorted
        else {
            // If target is in the sorted right half
            if (nums[mid] < target && target <= nums[r]) {
                return binarySearch(mid + 1, r);
            } else {
                return binarySearch(l, mid - 1);
            }
        }
    }
    
    return binarySearch(0, nums.length - 1);
}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([1,3], 3)); // 1
console.log(search([5,1,3], 5)); // 0