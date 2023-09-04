"use strict"; // treat all JS code as newer version

let name = "Sumedh";
let age = 23;
let isLoggedIn = false;

/**
 * number => 2 to power 53
 * bigint
 * string => ""
 * boolen => true.false
 * null => standalone
 * undefined
 * symbole => unique
 * 
 * object
 */

// console.log(typeof age);
// console.log(typeof undefined);

let score = "33";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedout = "sumedh"

let booleanIsLoggedIn = Boolean(isLoggedout);
console.log(booleanIsLoggedIn);

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);