/*
Problem: Check if a string can be rearranged to form a palindrome.

A palindrome is a string that reads the same forwards and backwards, such as "racecar" or "level".
A string can be rearranged to form a palindrome if at most one character has an odd count.

For example, "civic" can be rearranged to "civic", and "ivicc" can be rearranged to "civic".

Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(1), since we are using a fixed-size hash table (set) to store character counts.
*/
function isPalindrome(s: string): boolean {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left++] !== s[right--]) return false;
    }
    return true;
}

function isPalindrome(s: string): boolean {
    const charSet = new Set<string>();
    
    for (const char of s.toLowerCase()) {
        if (/[a-z0-9]/.test(char)) { // Only alphanumeric
            if (charSet.has(char)) {
                charSet.delete(char);
            } else {
                charSet.add(char);
            }
        }
    }
    
    // For even length: set should be empty
    // For odd length: set should have exactly 1 character
    return charSet.size <= 1;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false

/*
Problem: Given a string, what's the length of the longest palindrome that can be built from its characters?

Time Complexity: O(n), where n is the length of the string.
Space Complexity: O(1), since we are using a fixed-size hash table (set) to store character counts.
*/
function longestPalindromeLength(s: string): number {
    const charSet = new Set<string>();
    let length = 0;
    
    for (const char of s) {
        if (charSet.has(char)) {
            charSet.delete(char);
            length += 2; // We found a pair
        } else {
            charSet.add(char);
        }
    }
    
    // If there are remaining characters, we can use one as the center
    return charSet.size > 0 ? length + 1 : length;
}

console.log(longestPalindromeLength("abccccdd")); // 7 ("dccaccd")