
let sym = Symbol("MyValue");

const jsUser = {
    name: "Sumedh",
    "full name" : "Sumedh Barsagade",
    age: "22",
    [sym] : "myNewValue",
    location: "Nagpur",
    isLoggedIn: false,
    email: "sbarsgade248@gmail.com",
    lastLoginDate: ["Monday", "Saturaday"]
}

console.log(jsUser.email);
// always print array like this
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[sym]);

jsUser.email = "sumedh@gmail.com";
Object.freeze(jsUser);
jsUser.email = "sumedh@mail.com";
console.log(jsUser)
