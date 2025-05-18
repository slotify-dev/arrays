// Problem: Find the longest substring that is a palindrome.
// Time Complexity: O(n^2), where n is the length of the string.
// Space Complexity: O(1), since we are using a fixed-size hash table (set) to store character counts.

// Odd: 1, 3, 5, 7, 9
// Even: 2, 4, 6, 8, 10

function longestPalindrome(s: string): string {
    let max = '';
    
    function expandAroundCenter(left: number, right: number) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const current = s.substring(left, right + 1);
            if (current.length > max.length) max = current;
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // Odd length
        expandAroundCenter(i, i + 1); // Even length
    }
    
    return max;
}