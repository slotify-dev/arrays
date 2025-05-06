const numbers: number[] = [1, 2, 3, 4, 5];

// Classic for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for...of loop (values)
for (const num of numbers) {
    console.log(num * 2);
}

// forEach method
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});