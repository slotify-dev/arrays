# Recursion

Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.

To solve a problem recursively, we need to:

- Base Case: The simplest, smallest instance of the problem that can be solved directly.
- Recursive case: Break down the problem into smaller subproblems that are closer to the base case, solve them, and combine their results to solve the original problem.

Problem: Given an array of size n, sum all its elements using recursion.
For example, if the array is [1, 2, 3, 4], the sum is 1 + 2 + 3 + 4 = 10.

Base Case: If the array is empty, the sum is 0.
Recursive Case: If the array is not empty, how can we express the sum of the array in terms of a smaller array?

- Sum of [1, 2, 3, 4] is 1 + sum([2, 3, 4])
- sum([2, 3, 4]) is 2 + sum([3, 4])
- sum([3, 4]) is 3 + sum([4])
- sum([4]) is 4 + sum([]) (base case: sum([]) = 0)

## Two ways to solve Recursion problems

- Head-Tail: break the problem from the head -> head + sum(tail)
- Tail-Head: break the problem from the tail -> tail + sum(head)

```javascript
function headToTail(arr: number[]): number {
  // Base case: when array has single element
  if (arr.length === 1) return arr[0];

  // Recursive Case: break until we have single size element
  // Idea: head + sum(tail)
  return arr[0] + headToTail(arr.slice(1));
}
```
