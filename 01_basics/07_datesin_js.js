//Dates
// data is object type 
let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//let myCreateDate = new Date(2023, 0, 23);
//let myCreateDate = new Date(2023, 0, 23, 5, 6);
// is used for getting date time
let myCreateDate = new Date("2023-09-12");
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear())
console.log(newDate.getDay());

// ${newDate.getDay()} and the time

newDate.toLocaleString('default', {
    weekday: 'long'
})