const isPrime = (n: number) => true;

// Sum of numbers from 1 to n
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: sum(n) = n + sum(n - 1) + sum(n - 2) + ... + sum(1)
function sumOfNumbers(n: number): number {
  if (n <= 0) return 0;
  return n + sumOfNumbers(n - 1); // O(n) time
}

// Power of a number
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: power(n) = n * power(n - 1)
function powerOfNumber(n: number, p: number): number {
  if (p <= 0) return 1;
  // reduce the power by 1 and multiply by n
  return n * powerOfNumber(n, p - 1); // O(n) time
}

// Factorial of a number
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: factorial(n) = n * factorial(n - 1)
function factorial(n: number): number {
  if (n <= 0) return 1;
  return n * factorial(n - 1); // O(n) time
}

// Fibonacci sequence
// Time Complexity: O(2^n)
// Space Complexity: O(2^n)
// Formula: fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
function fibonacci(n: number): number {
  if (n <= 0) return 0;
  return fibonacci(n - 1) + fibonacci(n - 2); // O(2^n) time
}

// Sum of squares of numbers from 1 to n
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: sumOfSquares(n) = n^2 + sumOfSquares(n - 1)
function sumOfSquares(n: number): number {
  if (n <= 0) return 0;
  return n * n + sumOfSquares(n - 1); // O(n) time
}

// Sum of cubes of numbers from 1 to n
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: sumOfCubes(n) = n^3 + sumOfCubes(n - 1)
function sumOfCubes(n: number): number {
  if (n <= 0) return 0;
  return n * n * n + sumOfCubes(n - 1); // O(n) time
}

// Sum of even numbers from 1 to n
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: sumOfEvenNumbers(n) = n + sumOfEvenNumbers(n - 1)
function sumOfEvenNumbers(n: number): number {
  if (n <= 0) return 0;
  return n % 2 === 0 ? n + sumOfEvenNumbers(n - 1) : sumOfEvenNumbers(n - 1); // O(n) time
}

// Sum of odd numbers from 1 to n
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: sumOfOddNumbers(n) = n + sumOfOddNumbers(n - 1)
function sumOfOddNumbers(n: number): number {
  if (n <= 0) return 0;
  return n % 2 !== 0 ? n + sumOfOddNumbers(n - 1) : sumOfOddNumbers(n - 1); // O(n) time
}

// Sum of prime numbers from 1 to n
// Time Complexity: O(n)
// Space Complexity: O(n)
// Formula: sumOfPrimeNumbers(n) = n + sumOfPrimeNumbers(n - 1)
function sumOfPrimeNumbers(n: number): number {
  if (n <= 0) return 0;
  return isPrime(n) ? n + sumOfPrimeNumbers(n - 1) : sumOfPrimeNumbers(n - 1); // O(n) time
}

// Example usage:
console.log(sumOfNumbers(5)); // Output: 15
console.log(powerOfNumber(2, 3)); // Output: 8
console.log(factorial(5)); // Output: 120
console.log(fibonacci(5)); // Output: 5
console.log(sumOfSquares(5)); // Output: 55
console.log(sumOfCubes(5)); // Output: 225
console.log(sumOfEvenNumbers(5)); // Output: 6
console.log(sumOfOddNumbers(5)); // Output: 9
console.log(sumOfPrimeNumbers(5)); // Output: 10
