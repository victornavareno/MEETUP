// WINDOW ALERTS - STOPS THE BROWSER FROM DOING ANYTHING
window.alert(11);

let agc = 11;

document.write(11);

// InnerHTML property defines the content:
// creating an object
let person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
   };
   

class Person {
    constructor(nombre, apellido, edad, ojos) {
        this.fistName = nombre;
        this.lastName = apellido;
        this.age = edad;
        this.eyes = ojos;
    }
}


class Pet{
    constructor(nombre, color, perroBueno){
        this.name = nombre;
        this.colour = color;
        this.goodBoi = perroBueno;
    }
}

// FOR EVER IS THERES OMEON ELSE OR NOT
let myFather = new Person('Pedro', 'Navareno', '61', 'Marron');
let myDog = new Pet('cooper ' , 'nero', 'si');

document.getElementById("text1").innerHTML = myFather.firstName +  "  " 
+ myFather.lastName + " "
+ myFather.age + " "
+ myFather.eyes;

document.getElementById("text2").innerHTML = myDog.name + " "
+ myDog.colour + " " + myDog.goodBoi;






