// practicing splice and slice array methods  

let numbers = [4, 5, 6]
numbers.splice(0, 0, 1, 2, 3)
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

let newSplice = numbers.splice(6, 0, 7, 8, 9, 10)
console.log(numbers); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

let sliceNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newSlice = sliceNumbers.slice(0, 3);
console.log(newSlice); // [ 1, 2, 3 ]
