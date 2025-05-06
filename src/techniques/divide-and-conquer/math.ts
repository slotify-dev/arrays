/**
 * DIVIDE AND CONQUER TEMPLATE:
 * 
 * function solve(arr, left: number = 0, right: number = arr.length - 1) {
 *     // Base case (smallest subproblem)
 *     if (baseCaseCondition) return baseCaseSolution;
 *     
 *     // Divide: Split the problem
 *     const mid = Math.floor((left + right) / 2);
 *     
 *     // Conquer: Solve subproblems
 *     const leftResult = solve(arr, left, mid);
 *     const rightResult = solve(arr, mid + 1, right);
 *     
 *     // Combine: Merge results
 *     return combine(leftResult, rightResult);
 * }
 */

// 1. Find Maximum Element
function findMax(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left];

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    // Combine: Return the maximum of both halves
    // Note: Math.max is used to combine the results
    return Math.max(
        findMax(arr, left, mid),
        findMax(arr, mid + 1, right)
    );
}

// 2. Find Minimum Element
function findMin(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left];

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    // Combine: Return the maximum of both halves
    return Math.min(
        findMin(arr, left, mid),
        findMin(arr, mid + 1, right)
    );
}

// 3. Sum All Elements
function arraySum(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left];

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    // Combine: Return the maximum of both halves    
    return arraySum(arr, left, mid) + arraySum(arr, mid + 1, right);
}

// 4. Product All Elements
function arrayProduct(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left];

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    // Combine: Return the maximum of both halves    
    return arrayProduct(arr, left, mid) * arrayProduct(arr, mid + 1, right);
}

// 5. Count Even Numbers
function countEvens(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left] % 2 === 0 ? 1 : 0;

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    // Combine: Return the maximum of both halves    
    return countEvens(arr, left, mid) + countEvens(arr, mid + 1, right);
}

// 6. Check All Elements Positive
function allPositive(arr: number[], left: number = 0, right: number = arr.length - 1): boolean {
    // Base case: if the array has only one element
    if (left === right) return arr[left] > 0;

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    // Combine: Return the maximum of both halves    
    return allPositive(arr, left, mid) && allPositive(arr, mid + 1, right);
}

// 7. Find Array Average
function arrayAverage(arr: number[], left: number = 0, right: number = arr.length - 1): { sum: number, count: number } {
    // Base case: if the array has only one element
    if (left === right) return { sum: arr[left], count: 1 };

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    const leftRes = arrayAverage(arr, left, mid);
    const rightRes = arrayAverage(arr, mid + 1, right);

    // Combine: Return the maximum of both halves
    return {
        sum: leftRes.sum + rightRes.sum,
        count: leftRes.count + rightRes.count
    };
}

// 8. Find First Negative Number (index)
function firstNegativeIndex(arr: number[], left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left] < 0 ? left : -1;

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Conquer: Recursively find the maximum in both halves
    const leftResult = firstNegativeIndex(arr, left, mid);

    // Combine: Return the maximum of both halves
    return leftResult !== -1 ? leftResult : firstNegativeIndex(arr, mid + 1, right);
}

// 9. Check if Array is Sorted
function isSorted(arr: number[], left: number = 0, right: number = arr.length - 1): boolean {
    // Base case: if the array has only one element
    if (left === right) return true;
    if (right - left === 1) return arr[left] <= arr[right];

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);
    return isSorted(arr, left, mid) && 
           isSorted(arr, mid, right) && 
           arr[mid] <= arr[mid + 1];
}

// 10. Find Element Count (frequency)
function countOccurrences(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the array has only one element
    if (left === right) return arr[left] === target ? 1 : 0;

    // Divide: Find the middle index
    const mid = Math.floor((left + right) / 2);
    return countOccurrences(arr, target, left, mid) + 
           countOccurrences(arr, target, mid + 1, right);
}

// Testing all functions
const testArr = [3, -1, 4, 2, 5, -6, 1, 0];

console.log("Max:", findMax(testArr)); // 5
console.log("Min:", findMin(testArr)); // -6
console.log("Sum:", arraySum(testArr)); // 8
console.log("Product:", arrayProduct(testArr)); // 0
console.log("Even Count:", countEvens(testArr)); // 3
console.log("All Positive:", allPositive(testArr)); // false
console.log("Average:", arrayAverage(testArr).sum / arrayAverage(testArr).count); // 1
console.log("First Negative Index:", firstNegativeIndex(testArr)); // 1
console.log("Is Sorted:", isSorted(testArr)); // false
console.log("Count of 1:", countOccurrences(testArr, 1)); // 1