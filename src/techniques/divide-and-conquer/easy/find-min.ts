/*
Problem: Find the minimum element in a rotated sorted array.

Example:
Input: [3,4,5,1,2]
Output: 1

Time Complexity: O(log n)
Space Complexity: O(log n) due to recursion
*/

function findMin(nums: number[]): number {
    function search(l: number, r: number): number {
        // If array is not rotated or has one element
        if (nums[l] <= nums[r]) return nums[l];
        
        const mid = Math.floor((l + r) / 2);
        
        // Check if mid+1 is the minimum
        if (mid < r && nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        
        // Check if mid itself is the minimum
        if (mid > l && nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        
        // Decide which half to search
        if (nums[l] < nums[mid]) {
            return search(mid + 1, r);
        } else {
            return search(l, mid - 1);
        }
    }
    
    return search(0, nums.length - 1);
}

// Test cases
console.log(findMin([3,4,5,1,2])); // 1
console.log(findMin([4,5,6,7,0,1,2])); // 0
console.log(findMin([1])); // 1
console.log(findMin([2,1])); // 1
console.log(findMin([1,2,3])); // 1