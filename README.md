### What is an Array?

- Array is a collection of items of the same variable type (i.e. numbers, strings, etc...)
- All the elements are stored in contiguous memory locations

- Zero-Based Indexing → The first element is at index 0, not 1.
- Contiguous Memory → Elements are stored back-to-back in memory.

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

### Operations on Array

1. Traversal: It is a process of accessing and processing each element of an array sequentially
    - When an array is created, it occupies a contiguous block of memory where elements are stored in an indexed manner. 
    - Each element can be accessed using its index, which starts from 0 in most programming languages.

    Types of Array Traversal:
        - Sequential (Linear) Traversal
        - Reverse Traversal

2. Insertion: It is a process of adding a new element at a specific position while maintaining the order of the existing elements.         
   - create n+1 size array
   - identify index where insert should happen
   - shift element on right towards right by one position
   - insert the element at index
   - update the size of the array if required

   Types of Array Insertion:
    - Insert at begining (at 0 index)
    - Insert at specific index
    - Insert at end of the array (at length - 1)

3. Deletion: It is a process of removing an element from a specific position while maintaining the order of the remaining elements.      
    - indentify index for Deletion
    - move element from index on right to left by one position
    - update the size if needed.

    Types of Array Deletion:
        - Delete at begining (at 0 index)
        - Delete at specific index
        - Delete at end of the array (at length - 1)

4. Searching: It is a process of finding a specific element in a given list of elements.    

    Types of Searching in an Array:
        - Linear Searching
        - Binary Searching

5. Sorting: It is a process of sorting array elements in asc or desc order.

    Types of Sorting:
        - ASC: ascending or increasing order
        - DESC: decending or non-incresing order