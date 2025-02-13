function combine(arr1: number[], arr2: number[]): number[] {
  // Input validation
  if (!arr1.every(Number.isFinite) || !arr2.every(Number.isFinite)) {
    throw new Error('Arrays must contain only numbers.');
  }
  return [...arr1, ...arr2];
}

const result1 = combine([1, 2, 3], [4, 5, 6]);
console.log(result1); // Output: [1, 2, 3, 4, 5, 6]

// Example of error handling
try {
  const result2 = combine([1, 2, 'a'], [4, 5, 6]);
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Arrays must contain only numbers.
}
