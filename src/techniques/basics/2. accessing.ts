const colors: string[] = ['red', 'green', 'blue'];

// Access by index (0-based)
console.log(colors[0]);  // 'red'
console.log(colors[2]);  // 'blue'

// Access last element
console.log(colors[colors.length - 1]);  // 'blue'

// Safe access with optional chaining (TypeScript feature)
console.log(colors[5]?.toUpperCase());  // undefined (no error)