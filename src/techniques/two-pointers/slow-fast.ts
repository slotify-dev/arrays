/*
    Technique: Slow and Fast Pointers
    Description: This technique is used to find cycles in linked lists or arrays.

    Usecases:
        1. Detecting a cycle in a linked list.
        2. Finding the start of a cycle in a linked list.
        3. Finding the length of a cycle in a linked list.
        4. Finding the middle of a linked list.
        5. Finding the intersection point of two linked lists.
*/

// Example: Detect cycle in linked list (simulated with array indices)
function hasCycle(nums: number[]): boolean {
    let slow = 0;
    let fast = 0;

    while (fast < nums.length && nums[fast] !== undefined) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Array represents linked list where values are next indices
console.log(hasCycle([1, 2, 3, 4, 1])); // true (cycle 1→2→3→4→1)
console.log(hasCycle([1, 2, 3, 4, -1])); // false (no cycle)