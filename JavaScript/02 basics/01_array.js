// Array

// Resizeable array 

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myHeros = ["Marvel", "IronMan", "Saktiman", "DC"];

// console.log(myArr[3]);
// console.log(myHeros);

// array make always shallow  copy of the original one so any changes made on it will not affect to the original array .


// Methods in  JS arrays:

// .push(element)
const arr = [1, 2, 3];
arr.push(4, 5);
// console.log(arr); // Output: [1, 2, 3, 4, 5]

// .pop()
arr.pop();
// console.log(arr); // Output : [1, 2, 3, 4]

// .shift() - remove the first element of an array and return it
let element = arr.shift();
// console.log(element); // Output: 1
// console.log(arr); // Output: [2, 3, 4]

// .unshift(element) - add a new item to the beginning of an array and returns the length of the new array.
arr.unshift(-1);
// console.log(arr); // Output: [-1, 2, 3, 4]


// console.log(arr.includes(3)); // Returns true if found the value, else false

// .join(separator) - joins all elements of an array into a string
// console.log(myHeros.join("-")); // Output: Marvel-IronMan-Saktiman-DC return string



// slice 
// IMP: Slice doesn't modify  original array but creates a new one!
// Syntax: arr.slice(startIndex, endIndex) (---last index not inclued---)


let arr1 = [1,2,3,4,5,6];
console.log("A = " + arr1);

let sliceArr = arr1.slice(2,4);
console.log("Slice = " + sliceArr); // Output: [3,4]
console.log("B = " + arr1); // Output: [1,2,3,4,5,6]

// Splice 
// IMP: Its modify the  actual array!
// splice(indexToStart, number Of Elements To Remove, element1, element2 ...)

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1); // Removes 1 element starting from index 2
console.log(arr2); // Output: [1, 2, 4, 5]

arr2.splice(2, 0, 'a', 'b'); // Inserts 'a' and 'b' at index 2
console.log(arr2); // Output: [1, 2, 'a', 'b', 4, 5]

arr2.splice(2, 2, 'x', 'y', 'z'); // Replaces 2 elements starting from index 2 with 'x', 'y', 'z'
console.log(arr2); // Output: [1, 2, 'x', 'y', 'z', 4, 5]





