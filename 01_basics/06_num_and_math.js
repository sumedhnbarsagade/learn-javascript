const score = 400;

const balance = new Number(100);

//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));

const otherNumber = 223.8965;
//console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));

/**
 * Math Function
 */
console.log(Math);

console.log(Math.abs(-54));
console.log(Math.round(25.321));
console.log(Math.ceil(4.2)); //big number
console.log(Math.floor(4.2)); // small number


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min + 1)) + min)