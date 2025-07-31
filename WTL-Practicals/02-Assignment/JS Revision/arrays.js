console.log("Hello, This is array.js file");

const numbers = [1, 2, 3, 4, 5];

// Array Elements
console.log("Original array:", numbers);

// Array Data Type
console.log("Type Of Original array:", typeof numbers);

// Arrat Length
console.log("Length of Original array:", numbers.length);

// Pushing Element To Array

console.log("Original array without any operations:", numbers);
numbers.push(6);
console.log("After pushing 6:", numbers);
numbers.push(7);
console.log("After pushing 7:", numbers);
numbers.push(8);
console.log("After pushing 8:", numbers);
numbers.push(9);
console.log("After pushing 9:", numbers);
numbers.push(10);
console.log("After pushing 10:", numbers);

// Popping Element From Array
console.log("Original array before popping:", numbers);
numbers.pop();
console.log("After popping last element:", numbers);

// Popping First Element From Array
console.log("Original array before popping first element:", numbers);
numbers.shift();
console.log("After popping first element:", numbers);

// Unshifting Element To Array - adds an element to the beginning of the array
console.log("Original array before unshifting:", numbers);
numbers.unshift(0);
console.log("After unshifting 0:", numbers);

// Array Methods

// 01 - Filter - filters elements based on a condition

console.log("Original array for filtering:", numbers);
const filterData = numbers.filter((num) => {
  if (num > 5) return num;
});
console.log("Filtered data (elements > 5):", filterData);

// 02 - Map - applies a function to each element and returns a new array
console.log("Original array for mapping:", numbers);
const mapData = numbers.map((num) => {
  return num * num;
});
console.log("Mapped data (each element's Square):", mapData);

// 03 - Spread Operator - used to copy elements from one array to another
console.log("Original array for Copying:", numbers);
let copyData = [...numbers];
console.log("Copied Array : " , copyData);