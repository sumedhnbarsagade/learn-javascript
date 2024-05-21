const demoMessage = "Hello javascript";
let demoMessage1  = "Hello javascript";
// console.log(demoMessage);
// console.log(demoMessage1);

//arithmatic operator

const compare = (10 === 10);

//console.log(compare);

//function in javascript

// how to call a function using js

function greet() {
    //console.log("Hello Js");
}

greet();

function greetUser(userName, message="hello") {
    // console.log(userName);
    // console.log(message);

    return "Hi, I am " + userName + ". " + message;
}

// greetUser("sumedh", "How are you");
const greetin1 = greetUser("Max");
// console.log(greetin1);

const greeting2 = greetUser("Sumedh", "Hello, What's up");
// console.log(greeting2);

//Assigment

function combine(a, b, c){
    return (a * b / c);
}
 const calculate = combine(10,20,30);
 console.log(calculate);


 // Arrow function in javascript

 export default (userName, message)=> {
    console.log("Hello");
 }