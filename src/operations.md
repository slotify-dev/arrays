### Operations on Array

1. Updating Element

It is process of updating element at given index.

```typescript
// Time:
// Space:
function updateByIndex(arr: number[], index: number, value: number) {}

// Time:
// Space:
function updateByValue(arr: number[], oldValue: number, newValue: number) {}

// Example Array
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  updateByIndex(numArr, 0, 10), // [10, 2, 3, 4, 5, 6, 7, 8, 9]
  updateByValue(numArr, 10, 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
```

2. Accessing (Lookup)

It is a process of accessing element from the array.

```typescript
// Time:
// Space:
function getValueByIndex(arr: number[], index: number): number {}

// Time:
// Space:
function getIndexByValue(arr: number[], element: number): number {}

// Example Array
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  updateByIndex(numArr, 0, 10), // [10, 2, 3, 4, 5, 6, 7, 8, 9]
  updateByValue(numArr, 10, 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
```

3. Inserting or Adding

It is a process of adding elements to the array.

```typescript
// Time:
// Space:
function insertAtBegining(arr: number[], element: number): number {}

// Time:
// Space:
function insertAtIndex(arr: number[], index: number, element: number) {}

// Time:
// Space:
function insertAtEnd(arr: number[], element: number): number {}

// Example Array
const numArr = [2, 3, 5];

console.log(
  insertAtBegining(numArr, 1),
  insertAtIndex(numArr, 2, 4),
  insertAtEnd(numArr, 6)
);
```

4. Deleting or Removing

It is a process of removing elements from the array.

```javascript
// Time:
// Space:
function deleteAtBegining(arr: number[]): number {}

// Time:
// Space:
function deleteAtIndex(arr: number[], index: number) {}

// Time:
// Space:
function deleteAtEnd(arr: number[]): number {}

// Example Array
const numArr = [5, 1, 2, 8, 3, 7];

console.log(
  deleteAtBegining(numArr),
  deleteAtIndex(numArr, 2),
  deleteAtEnd(numArr)
);
```

5. Searching

It is a process of finding elements in the array.

```javascript
// Time:
// Space:
function linearSearch(arr: number[], target: number): number {}

// Time:
// Space:
function binarySearch(arr: number[], target: number): number {}

// Example Array
const numArr = [4, 5, 3, 2, 1];

console.log(
    linearSearch(numArr, 4) // 1,
    binarySearch(numArr, 3) // 2
);
```
