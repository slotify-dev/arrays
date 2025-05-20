/*
Problem: A peak element is an element that is strictly greater than its neighbors. Given an array, find a peak element.

Example:
Input: [1,2,3,1]
Output: 2 (element 3 is a peak)

Time Complexity: O(log n)
Space Complexity: O(log n) due to recursion
*/

function findPeakElement(nums: number[]): number {
    // Divide and conquer approach using binary search
    function search(l: number, r: number): number {
        if (l === r) return l;
        
        const mid = Math.floor((l + r) / 2);
        
        // If mid element is smaller than next, peak is in right half
        if (nums[mid] < nums[mid + 1]) {
            return search(mid + 1, r);
        } 
        
        // Else peak is in left half
        return search(l, mid);
    }
    
    return search(0, nums.length - 1);
}

// Test cases
console.log(findPeakElement([1,2,3,1])); // 2 (index of 3)
console.log(findPeakElement([1,2,1,3,5,6,4])); // 1 or 5
console.log(findPeakElement([1])); // 0
console.log(findPeakElement([1,2])); // 1
console.log(findPeakElement([2,1])); // 0