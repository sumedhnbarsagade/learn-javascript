// array in javascript

const myArr = [0, 2, 3, 5, 6, 8]

const myArr2 = []
//console.log(myArr[0]);

const myArr3 = new Array(1,2,3,4)
//console.log(myArr[1]);

//Array Method
//add new value in array
// myArr.push(6);
// myArr.push(11)
// remove value from array
// myArr.pop();
// add element at start of arry
//myArr.unshift(30);
//remove first element
//myArr.shift();

// find element in array
// console.log(myArr.includes(100));
// console.log(myArr.indexOf(8));


// const newArr = myArr.join();

// console.log(myArr);

// console.log(typeof newArr);

// slice, splice
//The slice() method can be used to create a copy of an array or return a portion of an array.
 //It is important to note that the slice() 
 //method does not alter the original array but instead creates a shallow copy.
console.log("A", myArr);
const myNewArray = myArr.slice(1,3);

console.log(myNewArray);
console.log("B", myArr);

//the splice() method will change the contents of the original array. 
// The splice() method is used to add or remove elements of an existing 
// array and the return value will be the removed items from the array.
const myNewArray1 = myArr.splice(1,3);
console.log("c", myArr);
console.log(myNewArray1);

