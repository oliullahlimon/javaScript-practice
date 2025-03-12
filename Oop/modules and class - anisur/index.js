import {text, setText} from './myModule.js'

console.log(text);
setText("Goodbye from es6");
console.log(text)


class student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

let s1 = new student(101, "Oliullah");
console.log(s1);