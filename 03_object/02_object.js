//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123user";
tinderUser.name = "Sumedh",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUserName = {

    email: "sbarsagade248@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sumedh",
            lastNameL: "Barsagade"
        }
    }
}

//console.log(regularUserName.fullName.userFullName);
//how to merge object in javascript
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = { obj1, obj2};

//const object4 = Object.assign({}, obj1, obj2);
// most used syntax
const object4 = {...obj1, ...obj2}
console.log(object4);


const users = [
    {
        id: 1,
        email: "ema@gmail.com"
    }
]

// users[1].email;
console.log(tinderUser);

// for print object keywords
console.log(Object.keys(tinderUser));

// for print object assign value to keywords
console.log(Object.values(tinderUser));

//for printing both keywords and value
console.log(Object.entries(tinderUser));

//use fo checking the value is exist or not in object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

