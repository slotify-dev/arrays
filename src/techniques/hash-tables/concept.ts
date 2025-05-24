// The Basic Hash Function
// If two keys hash to the same slot, one will overwrite the other in a hash table.
// Only sums character codes → Anagrams ("bad" vs "dab") collide.
// Small table size (% 10) → Many keys map to the same few slots.
function hash(key: string, tableSize: number): number {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i); // Sum all character codes
  }
  return hash % tableSize; // Modulo to fit within table size
}

hash("cat", 10); // 'c' (99) + 'a' (97) + 't' (116) = 312 → 312 % 10 = 2
hash("dog", 10); // 'd' (100) + 'o' (111) + 'g' (103) = 314 → 314 % 10 = 4

hash("bad", 10); // 'b' (98) + 'a' (97) + 'd' (100) = 295 → 295 % 10 = 5
hash("dab", 10); // 'd' (100) + 'a' (97) + 'b' (98) = 295 → 295 % 10 = 5

// Solution 1: Multiply by a Prime Number
// Anagrams no longer collide!
// Multiplication + prime number breaks commutativity (a * b ≠ b * a).
// Better distribution → Fewer collisions.
function betterHash(key: string, tableSize: number): number {
  let hash = 0;
  const PRIME = 31; // Helps distribute hashes better
  for (let i = 0; i < key.length; i++) {
    hash = (hash * PRIME + key.charCodeAt(i)) % tableSize;
  }
  return hash;
}

betterHash("bad", 10); // 4
betterHash("dab", 10); // 2 → Different hashes!

/*
Solution 2: Use a Stronger Hashing Algorithm (e.g., djb2)

How It Works:

✔ Starts with 5381 (empirically chosen for better distribution).
✔ Multiplies by 33 and XORs with the character code.
✔ Final Math.abs ensures a positive index.

Strengths:

✔ Excellent distribution: The "magic number" 5381 improves hashing.
✔ Avalanche effect: Small input changes drastically change output.
✔ Battle-tested: Used in many real-world applications (e.g., Unix systems).

Weaknesses:

❌ Slightly slower: Uses multiplication (* 33) instead of bit shifts.
❌ No 32-bit clamping: May need hash |= 0 for very long keys.

*/
function djb2Hash(key: string, tableSize: number): number {
  let hash = 5381; // Magic initial value
  for (let i = 0; i < key.length; i++) {
    hash = (hash * 33) ^ key.charCodeAt(i); // XOR for better mixing
  }
  return Math.abs(hash) % tableSize;
}

djb2Hash("bad", 10); // 7
djb2Hash("dab", 10); // 1 → No collision!

/*
How It Works:

✔ (hash << 5) - hash = hash * 31 (bitwise optimization of multiplication).
✔ hash |= 0 → Truncates to 32-bit integer (avoids overflow issues).
✔ Final Math.abs ensures a positive index.

Strengths:

✔ Fast: Uses bitwise operations (optimized in JS engines).
✔ Good distribution: * 31 is a common multiplier in hash functions.
✔ 32-bit clamping: Prevents integer overflow issues.

Weaknesses

❌ No "magic seed": Starts at 0, which may lead to weaker avalanche effect.
❌ Less tested than djb2: Not as widely studied for collision resistance.

*/
function hash3(key: string, tableSize: number): number {
  let hash = 0;
  // Same as: hash = (hash * PRIME + key.charCodeAt(i)) % tableSize;
  for (let i = 0; i < key.length; i++) {
    const char = keyString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash) % tableSize; // Modulo to fit within table size
}

hash3("hello", 100); // 32
hash3("world", 100); // 64
hash3("bad", 100);   // 24
hash3("dab", 100);   // 21 (No collision!)