function findFirst(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1, res = -1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            res = mid;
            right = mid - 1; // Continue searching left
        } else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return res;
}
console.log(findFirst([1, 2, 2, 2, 3], 2)); // 1 (first occurrence)


function findLast(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1, res = -1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            res = mid;
            left = mid + 1; // Continue searching right
        } else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return res;
}
console.log(findLast([1, 2, 2, 2, 3], 2)); // 3 (last occurrence)


function countOccurrences(nums: number[], target: number): number {
    const first = findFirst(nums, target);
    if (first === -1) return 0;
    const last = findLast(nums, target);
    return last - first + 1;
}
console.log(countOccurrences([1, 2, 2, 2, 3], 2)); // 3