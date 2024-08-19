class User {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this.name + ' Hello ');
        return this.name;
    }
}

const alena = new User('Alena');
console.log(alena);

class Person extends User {
    constructor(name, email) {
        super(name);
        this.email = email;
    }
    sayHello() {
        console.log(super.sayHello());
        console.log(this.email);
    }
}

const li = new Person('Li', 'li@gmail.com');
// console.log(li);
// console.log(li.sayHello());
console.log(li.sayHello());


