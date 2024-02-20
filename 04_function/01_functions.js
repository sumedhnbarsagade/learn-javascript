function sayMyName() {
    console.log("s");
    console.log("u");
    console.log("m");
    console.log("e");
    console.log("d");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(a, b){
//     console.log(a + b);
// }

// const result =  addTwoNumbers(2, 6);

// console.log("Result", result);



// function addTwoNumbers(a, b){
//     // let result = a + b;
//     // return result;

//     return a + b

// }

// const result =  addTwoNumbers(2, 6);

// console.log("Result", result);




// function loginUserMessage(username){

//     if(!username){
//     console.log("Please enter a username");
//     return
//     }
//     return `${username} just logged in` 
// }

// console.log(loginUserMessage("nilesh"));


// shopping cart
// (...)rest operator in js
// function calculateCartPrice(val1, val2, ...num1){
//     return num1

// }

//console.log(calculateCartPrice(200, 300, 400, 500, 600, 500, 300 ));

// call valur from object using function
// const user = {
//     username: "sumedh",
//     price: 25
// }

function handleObject(anyobject){
    console.log(`Usename is ${anyobject.username} and pricing of product is ${anyobject.price}`);
}

//handleObject(user);

handleObject({
    username: "Nilesh",
    price: 20
})

// call valur from arry using function
const muNewArray = [200, 400, 100, 600];

function returnValueFromArray(getArray){
    return getArray[0];
}

console.log(returnValueFromArray(muNewArray))
 
