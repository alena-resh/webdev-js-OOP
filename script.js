//прототипом может быть только объект

let a = { 
    "text":'Hello hello',
    "color": 'red',
    "bold": true,
    "show": function (){
        console.log(this.color);
    }
};

let b = {
    "fontSize": '24px', 
    __proto__:  a //наследник а
}

let c = {
    "fontFamily": 'Verdana', 
    __proto__ : b //наследник b
}

console.log(c);
console.log(c.bold);