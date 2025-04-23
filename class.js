
// let dog = {
//     dogName:"JavaScript",
//     weight:2.4,
//     color:"brown",

// };

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj = new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);


// class Dog{
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript","2.4","brown","chohuaha");
// // console.log(dog.dogName);
// // console.log(dog.weight);
// // console.log(dog.color);
// // console.log(dog.breed);
// console.log(dog.dogName,"is a",dog.breed, "and",dog.color,"and",dog.breed);



// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p= new Person("Paridhi","Raghuvanshi");
// console.log("Hi",p.firstname);


// class Person {
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
//     greet(){
//         console.log("hi there! I'm",this.firstname);
//     }
//     compliment(name,object){
//         return "That's a wonderful" + object + ","+ name;

//     }
// }
// let p= new Person("Paridhi","Raghuvanshi");
// p.greet();
// let compliment=p.compliment("Harry","hat");
// console.log(compliment);

// class Person{
//     constructor(firstname,lastname){
//     this.firstname=firstname;
//     this.lastname=lastname;
// }
// }
// let p=new Person("Paridhi","Raghuvanshi");
// console.log("hi",p.firstname);

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Paridhi", "Raghuvanshi");
// console.log("hi", p.firstname);


// validation
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }

//     getData() {
//         return First Name: ${this.#firstname}, Last Name: ${this.#lastname};
//     }
// }

// let p = new Person("kay", "Moon");
// console.log(p.getData());



// getters 

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname){
//         this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
// }
// let p= new Person("Paridhi","Raghuanshi");
// p.firstname="Ayush";
// console.log(p.firstname);


// INHERITANCE

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel");

//     }

// }
// let motor=new Motorcycle("Black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();


// PROTOTYPES

class Person {
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    greet(){
        console.log("hi there! I'm",this.firstname);
    }
}
Person.prototype.introduce = function () {
    console.log("Hi,I'm",this.firstname);
};
Person.prototype.favouriteColor = "Green";
let p = new Person("Paridhi","Raghuvanshi");
console.log(p.favouriteColor);
p.introduce();
