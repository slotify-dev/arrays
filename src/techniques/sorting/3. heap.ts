/**
 * Steps:
 * 1. Build a max-heap from the input array.
 * 2. Swap the root (maximum value) of the heap with the last element of the heap.
 * 3. Reduce the heap size by 1 and heapify the root.
 * 4. Repeat steps 2-3 until the heap is empty.
 *
 * Time Complexity:
 * - Best: O(n log n)
 * - Average: O(n log n)
 * - Worst: O(n log n)
 *
 * Space Complexity: O(1) (in-place sorting)
 *
 * Left child: 2i + 1
 * Right child: 2i + 2
 * Parent: Math.floor((i - 1) / 2)
 */

// 1. Heap Sort (Ascending Order - Min-Heap Approach)
function heapSortAsc(arr: number[]): number[] {
  let n = arr.length;

  // Build max heap (for ascending order)
  // time: O(n) amortized
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyAsc(arr, n, i);
  }

  // Extract elements from heap one by one (move max to end)
  // Time: O(n log n)
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root (max) with last element
    heapifyAsc(arr, i, 0); // Heapify the reduced heap
  }

  return arr;
}

// takes array, length and index
function heapifyAsc(arr: number[], n: number, i: number): void {
  let largest = i; // Initialize largest as root

  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  // If right child is larger than current largest
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root, swap and continue heapifying
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyAsc(arr, n, largest);
  }
}

// 2. Heap Sort (Descending Order - Min-Heap Approach)
function heapSortDesc(arr: number[]): number[] {
  let n = arr.length;

  // Build min heap (for descending order)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapifyDesc(arr, n, i);
  }

  // Extract elements from heap one by one (move min to end)
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root (min) with last element
    heapifyDesc(arr, i, 0); // Heapify the reduced heap
  }

  return arr;
}

function heapifyDesc(arr: number[], n: number, i: number): void {
  let smallest = i; // Initialize smallest as root
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  // If left child is smaller than root
  if (left < n && arr[left] < arr[smallest]) {
    smallest = left;
  }

  // If right child is smaller than current smallest
  if (right < n && arr[right] < arr[smallest]) {
    smallest = right;
  }

  // If smallest is not root, swap and continue heapifying
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    heapifyDesc(arr, n, smallest);
  }
}
