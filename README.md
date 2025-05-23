### What is an Array?

- Arrays are non-primitive data type
- Array is a collection of items or elements
- All the elements are stored in contiguous memory locations

Important Terms:

- Index: Position (starts at 0)
- Element: Value at an index
- Length: Number of items.

- Zero-Based Indexing → The first element is at index 0, not 1.
- Contiguous Memory → Elements are stored back-to-back in memory.
  - Let say that first element is stored at memory address of hexa decimal value 1000
  - If we are storing numbers which is 4 byte next element will be 1000+4 = 1004 address
  - Same formula for rest of the elements in array if you know memory address of one element you can find out their neighbors easily

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
// Time: O(1)
// Space: O(1)
function updateByIndex(arr: number[], index: number, value: number) {
  arr[index] = value;
}

// Time: O(n)
// Space: O(1)
function updateByValue(arr: number[], oldValue: number, newValue: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldValue) {
      arr[i] = newValue;
    }
  }
}
```

2. Accessing (Lookup)

It is a process of accessing element from the array.

```typescript
// Time: O(1)
// Space: O(1)
function getValueByIndex(arr: number[], index: number): number {
  return arr[index];
}

// Time: O(n)
// Space: O(1)
function getIndexByValue(arr: number[], element: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) return i;
  }
  return -1;
}
```

3. Inserting or Adding

It is a process of adding elements to the array.

```typescript
// Time: O(1)
// Space: O(1)
function insertAtEnd(arr: number[], element: number): number {
  arr[arr.length] = element;
  return arr.length;
}

// Time: O(n)
// Space: O(1)
function insertAtBegining(arr: number[], element: number): number {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr.length;
}

// Time: O(n)
// Space: O(1)
function insertAtIndex(arr: number[], index: number, element: number) {
  const newArr = new Array(arr.length + 1);

  // process elements before index
  for (let i = 0; i < index; i++) newArr[i] = arr[i];

  // at the index
  newArr[index] = element;

  // process elements after index
  for (let i = index; i < arr.length; i++) newArr[i + 1] = arr[i];
}
```

4. Deleting or Removing

It is a process of removing elements from the array.

```javascript
// Time: O(1)
// Space: O(1)
function deleteAtEnd(arr: number[]): number {
  const last = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return last;
}

// Time: O(n)
// Space: O(1)
function deleteAtBegining(arr: number[]): number {
  const first = arr[0];

  // copy from right to left
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // update array length
  arr.length = arr.length - 1;

  return first;
}

// Time: O(n)
// Space: O(1)
function deleteAtIndex(arr: number[], index: number): number[] {
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
// Time: O(n)
// Space: O(1)
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Time: O(n log n)
// Space: O(1)
function binarySearch(arr: number[], target: number): number {
  arr.sort((a, b) => a - b); // asc

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
