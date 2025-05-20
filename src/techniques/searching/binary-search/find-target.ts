/*
Binary Search Problem: Find the Index of a Target in a Sorted Array

Problem Statement:
Given a sorted array of integers and a target value, return the index of the target if it exists in the array. If not, return -1.

Time Complexity: O(log n) - We're halving the search space with each iteration
Space Complexity: O(1) - We're using constant space regardless of input size

Constraints:
- Array is sorted in ascending order
- Array may contain duplicates
- If target exists multiple times, return any valid index
*/

function binarySearch(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Test cases
console.log(binarySearch([1, 3, 5, 7, 9], 5));  // 2
console.log(binarySearch([1, 3, 5, 7, 9], 2));  // -1
console.log(binarySearch([1, 3, 3, 5, 7], 3));  // 1 or 2 (both correct)
console.log(binarySearch([], 5));               // -1
console.log(binarySearch([1], 1));              // 0


function searchRotated(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}

console.log(searchRotated([4,5,6,7,0,1,2], 0)); // 4