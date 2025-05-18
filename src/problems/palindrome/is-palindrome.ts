// Problem: Given a string, check if it can be rearranged to form a palindrome.
// Time Complexity: O(n), where n is the length of the string.
// Space Complexity: O(1), since we are using a fixed-size hash table (set) to store character counts.

function canPermutePalindrome(s: string): boolean {
    const charSet = new Set<string>();
    
    for (const char of s) {
        if (charSet.has(char)) {
            charSet.delete(char);
        } else {
            charSet.add(char);
        }
    }
    
    return charSet.size <= 1;
}