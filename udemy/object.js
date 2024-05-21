const user = {
    name: "Sumedh",
    age: 34,
    greet() {
        console.log("Hello Object!");
        console.log(this.age);
    }
};

console.log(user.name);
user.greet();

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hii!");
    }
}

const user1 = new User("Sumedh", 25);
console.log(user1);
user1.greet();