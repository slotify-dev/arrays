# Binary Search Applicable Scenarios

All scenarios require **monotonic order** (strict/partial) to discard search space.

## 1. Classic Sorted Arrays

- **Strictly ascending**: `[1, 3, 5, 7, 9]`  
- **Strictly descending**: `[9, 7, 5, 3, 1]`  

## 2. Sorted Arrays with Duplicates

- **Find boundaries**:  `[1, 2, 2, 2, 3, 4]`  
  - First occurrence of `2` → index `1`  
  - Last occurrence of `2` → index `3`  

## 3. Rotated Sorted Arrays

- **Pivoted sorted array**:  `[4, 5, 6, 7, 0, 1, 2]`
  - (originally `[0, 1, 2, 4, 5, 6, 7]`)  
  - Key insight: One half is always sorted  

## 4. Mountain/Bitonic Arrays

- **Peak finding**:  `[1, 3, 5, 4, 2]` → peak at `5`  
- **Valley finding**:  `[10, 8, 5, 3, 1, 2, 4]` → trough at `1`  

## 5. Implicitly Sorted Sequences

- **Monotonic function outputs**:  
  `[1, 4, 9, 16, 25]` (squares of `[1, 2, 3, 4, 5]`)  
  `[2, 4, 8, 16, 32]` (exponentials of `2`)  

## 6. Answer Space Search

- **Finding sqrt(x)**: Search `[0, 1, 2, ..., x]`  
- **Missing numbers**: Find first missing positive integer  

## 7. Sorted 2D Matrices

- **Row + column sorted**:  
[ [1, 4, 7],
[2, 5, 8],
[3, 6, 9] ]

- Search like a flattened sorted array  

## 8. Unbounded/Streaming Data

- **Infinite array**: `[1, 3, 5, 7, ...]`  
- Find bounds exponentially first (`1, 2, 4, 8, ...`)  

## When Binary Search **Fails**

❌ Unsorted arrays without monotonic pattern  
❌ Non-deterministic order changes  
❌ Multi-dimensional data without row/column ordering
