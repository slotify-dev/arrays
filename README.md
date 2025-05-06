### What is an Array?

- Array is a collection of items or elements
- All the elements are stored in contiguous memory locations

- Zero-Based Indexing → The first element is at index 0, not 1.
- Contiguous Memory → Elements are stored back-to-back in memory.
  - Let say that first element is stored at memory address of hexa decimal value 1000
  - If we are storing numbers which is 4 byte next element will be 1000+4 = 1004 address
  - Same formula for rest of the elements in array if you know memory address of one element you can find out their neighbors easily

Important Terms:

- Index: Position (starts at 0)
- Element: Value at an index
- Length: Number of items.

Think of an array like a parking lot:

- Each spot (index) holds one car (element).
- You can find a car fast if you know its spot number.
- But if the lot is full, you can’t add more cars unless you build a bigger lot (resize the array).

Arrays are stored in contiguous (sequential) memory locations.

- Array reference/address is stored in stack memory
- Array elements are stored in heap memory

```bash
# Each int is 4 bytes, so addresses increment by 4.
arr[0] → 0x1000
arr[1] → 0x1000 + (1 * 4) = 0x1004
arr[2] → 0x1000 + (2 * 4) = 0x1008
```

### Types of Arrays

1. One-Dimentional
2. Multi-Dimentional

```typescript
const oneDimArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const twoDimArr = [
  [1, 2, 3], // row 1
  [4, 5, 6], // row 2
  [7, 8, 9], // row 3
];
```

### Operations on Array

1. Updating Element

It is process of updating element at given index.

```typescript
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function updateAtIndex(arr: number[], index: number, value: number) {
  arr[index] = value;
}

// Time: O(1)
// Space: O(1)
numArr[0] = 12; // update value at index 0
updateAtIndex(numArr, 0, 12); // update value at index 0
```

2. Accessing (Lookup)

It is a process of accessing element from the array.

```typescript
// Time Complexity: O(1) - Direct access by index
// Space Complexity: O(1) - No additional space needed
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Direct Index Access
// Time/Space: O(1)
function getValueByIndex<T>(arr: T[], index: number): T | undefined {
  return arr[index];
}

// 2. Linear Search by Value
// Best Case: O(1) - Element is first in array
// Average Case: O(n) - May need to check half the elements on average
// Worst Case: O(n) - Element is last or not present
function getIndexByValue<T>(arr: T[], element: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}
```

3. Inserting or Adding

It is a process of adding elements to the array.

```typescript
// 1. Insert at End
// Average Time: O(1) - Most cases just adds to end
// Worst Time: O(n) - When array needs resizing/copying
// Space: O(1) (amortized)
function push<T>(arr: T[], element: T): number {
  arr[arr.length] = element;
  return arr.length;
}

// 2. Insert at Beginning
// Time: O(n) - Must move all existing elements
// Space: O(n) - Creates new array
function unshift<T>(arr: T[], element: T): number {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr.length;
}

// 3. Insert at Specific Index
// Average Time: O(n) - Up to n elements may need shifting
// Best Case: O(1) - When inserting at end
// Worst Case: O(n) - When inserting at beginning
function insertAtIndex<T>(arr: T[], index: number, element: T): T[] {
  const newArr = new Array(arr.length + 1);

  // process elements before index
  for (let i = 0; i < index; i++) newArr[i] = arr[i];

  // at the index
  newArr[index] = element;

  // process elements after index
  for (let i = index; i < arr.length; i++) newArr[i + 1] = arr[i];

  return newArr;
}
```

4. Deleting or Removing

It is a process of removing elements from the array.

```javascript
// 1. Remove from End
// Time: O(1) - Just reduces length counter
// Space: O(1) - No new allocation needed
function pop<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

// 2. Remove from Beginning
// Time: O(n) - Must move all remaining elements
// Space: O(n) - Creates new array
function shift<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  const first = arr[0];

  // copy from right to left
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // update array length
  arr.length = arr.length - 1;

  return first;
}

// 3. Remove from Specific Index
// Average Time: O(n) - May need to shift up to n elements
// Best Case: O(1) - When removing from end
// Worst Case: O(n) - When removing from beginning
function removeAtIndex<T>(arr: T[], index: number): T[] {
  const newArr = new Array(arr.length - 1);

  // copy elements before index
  for (let i = 0; i < index; i++) {
    newArr[i] = arr[i];
  }

  // move elements after index by one to left
  for (let i = index + 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }

  return newArr;
}
```

5. Searching

It is a process of finding elements in the array.

```javascript
// 1. Linear Search (Unsorted Arrays)
// Best Case: O(1) - First element matches
// Average Case: O(n) - Checks ~n/2 elements on average
// Worst Case: O(n) - Last element matches or not found
function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// 2. Binary Search (Sorted Arrays Only)
// Time: O(log n) - Halves search space each iteration
// Space: O(1) - Uses constant space
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

5. Sorting

- Coming Soon
