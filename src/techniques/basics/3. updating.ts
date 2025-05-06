let animals: string[] = ['dog', 'cat'];

// Add to end of array
animals.push('elephant');
console.log(animals);  // ['dog', 'cat', 'elephant']

// Remove from end
const last = animals.pop();
console.log(last);     // 'elephant'
console.log(animals);  // ['dog', 'cat']

// Add to beginning
animals.unshift('zebra');
console.log(animals);  // ['zebra', 'dog', 'cat']

// Remove from beginning
const first = animals.shift();
console.log(first);    // 'zebra'
console.log(animals);  // ['dog', 'cat']