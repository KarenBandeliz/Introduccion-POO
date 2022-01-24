//Exercise #1: A Person Object. Part 1 Javascript. Create a class called Person which accepts the name of a person as a string, and his/her/their age as a number.The Person class should have a method called Describe which returns a string with the following syntax: "name, age years old".

function Person(firstName, age) {

    this.firstName = firstName;
    this.age = age;

    this.fullName = function() {
        return this.firstName + " " + this.age;
    }
}

var newPerson = new Person(prompt("Ingrese nombre"), prompt("Ingrese edad")+" años");
console.log(newPerson.fullName());
//Part 2 HTML. Create an HTML page that has 2 input boxes: one for name and another for age. When someone enters a name and age, the page will show a list of "{Name}, {x} years old".

class person {
    constructor(name, age) {
    this.name_person = name;
    this.age_person = age;
    }

    describe() {
    return (
        this.name_person + ", " + this.age_person + " years old");
    }
}

function getdata(){
    var name1 = document.getElementById('name').value;
    var age1 = parseInt(document.getElementBykarenId('age').value);

    let persona1 = new person(name1, age1);
    document.getElementById("Id").innerHTML = persona1.describe();
}

