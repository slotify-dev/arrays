/*
    Technique: Two Pointers (Opposite Direction)
    Description: This technique is used when you need to compare elements in opposite directions, often to find pairs or to check for conditions.
    
    Usecases:
        1. Checking if a string is a palindrome.
        2. Finding the longest palindromic substring.
        3. Reversing a string or array in place.
        4. Merging two sorted arrays in reverse order.
        5. Finding the longest common prefix.
        6. Finding the longest increasing subsequence.
        7. Finding the longest common subsequence.
*/

// Example: Check if array is a palindrome
function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false