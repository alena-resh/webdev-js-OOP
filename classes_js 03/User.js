// abst class => class => object

class User {
    constructor(username, password) { // function with two required properties, automatically running when new object is creating
        this.username = username;
        this.password = password;
    }
    validatePassword() {
        console.log('work parent pass');
        if (this.password.length > 6) {
            return true;
        }
        return false;
    }
}