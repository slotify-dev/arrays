# What is Prefix Sum?

Imagine you're a cashier keeping track of daily earnings.
Instead of calculating the total from scratch every time someone asks "How much did we make from day 3 to day 7?", you could maintain a running total (prefix sum) to answer such questions instantly.

Formal Definition: A prefix sum array is an auxiliary array where each element at index i represents the sum of all elements from the start of the original array up to index i.

The Core Idea

- Preprocessing Step: Create a prefix sum array where prefix[i] = arr[0] + arr[1] + ... + arr[i]
- Query Step: Use this precomputed array to answer range sum queries in constant time

```bash
Index 0: 2         (2)
Index 1: 2 + 4     (6)
Index 2: 2 + 4 + 1 (7)
Index 3: 2 + 4 + 1 + 5 (13)
Index 4: 2 + 4 + 1 + 5 + 3 (16)

Input: [2, 4, 1, 5, 3]
Output: [2, 6, 7, 13, 16]
```

## Why Use Prefix Sums?

- Simplicity: The concept is straightforward to implement
- Versatility: Forms the basis for more advanced algorithms
- Efficiency: After O(n) preprocessing, range sum queries become O(1)

```javascript
function buildPrefixSum() {
    prefix[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i-1] + arr[i];
    }
}

function rangeSum(i: number, j: number, prefix: number[]): number {
    if (i === 0) return prefix[j];
    return prefix[j] - prefix[i-1];
}
```
