/*
Problem: Group words with same set of characters
Given a list of words with lower cases. Implement a function to find all Words that have the same unique character set. 

Example:  

Input: words[] = { "may", "student", "students", "dog",
                 "studentssess", "god", "cat", "act",
                 "tab", "bat", "flow", "wolf", "lambs",
                 "amy", "yam", "balms", "looped", 
                 "poodle"};
Output : 
looped, poodle, 
lambs, balms, 
flow, wolf, 
tab, bat, 
may, amy, yam, 
student, students, studentssess, 
dog, god, 
cat, act, 

All words with same set of characters are printed 
together in a line.

*/
function groupWords(words: string[]): void {
  // Create a map to store groups of words with the same character set
  const groups = new Map<string, string[]>();

  // Iterate through each word
  for (const word of words) {
    // Sort the characters in the word to create a unique key
    const key = Array.from(new Set(word.split("")))
      .sort()
      .join("");

    // Add the word to the corresponding group in the map
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)?.push(word);
  }

  // Print the groups of words with the same character set
  for (const group of groups.values()) {
    console.log(group.join(", "));
  }
}
