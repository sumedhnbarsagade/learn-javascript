/**
 * Primitive data typea
 * 
 * 7 data type
 * 
 * String
 * Number,
 * Boolean,
 * null,
 * undefined,
 * symbol,
 * bigint
 */
//Javascript is Static type or dynamic type
const score = 100;
const scoreValue = 100.3;

const isLoggedin = false;

const outSideTemp = null;

let userEmail;

const id = Symbol('123');
//console.log(id);
const anotherID = Symbol('123')
//console.log(anotherID);

console.log(id === anotherID);

const bigNumber = 547644646476464n
/**
 * No primitive data type
 * 
 * Array, Object, Function
 * 
 */
const heros = ["Captain America, Iron Man, Dr Strange, Hulk"];
let myObj = {
    name: "Sumedh",
    age: 22,
    occupation: "developer"
}
