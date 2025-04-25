//Create a MAP
// const Fruits = new Map([
//     ["Apples",500],
//     ["Bananas",300],
//     ["Oranges",200]
// ]);
// console.log(Fruits);

//Create a Map
// const fruits = new Map();

//     //Set Map values
//     fruits.set("Apples",500);
//     fruits.set("Bananas",300);
//     fruits.set("Oranges",200);
//     fruits.set("mangoes",350);
//     console.log(fruits);
    //the set() method can be used to change existing map values
    //fruits.get("Apples");
    //Loosley Coupled Language

    //Return Object
    // typeof fruits;
    // instanceof Map returns true;
    //Retuen true
    // fruits instanceof Map;

    // javascript map methods
// 1.new Map
// 2.Map.get();
// 3.Map.set();
// 4.Map.size();
// console.log(fruits.size);
// 5.Map.delete();
// fruits.delete("apples");
// console.log(fruits);
// 6.Map.clear
// fruits.clear();
// 7.map.has();
// console.log(fruits.has("apples"));
// 8.Map.forEach();
// let text="";
// fruits.forEach(function(value,key){
//     text+= key+ '=' +value;
// })
// console.log(text);
// 9.map.entries
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);
// 10.map.keys()
// let text="";
// for(const x of fruits.keys()){
//     text+=x
// }
// console.log(text);
// 11.map.values
// let text="";
// for(const x of fruits.values()){
//      text+=x
//  }
//  console.log(text);
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

// //Create Object
// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranges'};
// //Create a Map
// const fruits=new Map();
// //
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,400);
// console.log(fruits);
// console.log(fruits.get("apples"));

//Array
// const fruits = [
//     {name:"apples",quantity:300},
//     {name:"banana",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];

// function myCallback({quantity}){
//     return quantity > 200 ? "ok" : "low";
// }
// const result = Map.groupBy(fruits,myCallback);

//Create an Object
// const person={
//     firstName:"John",
//     lastName:"Deo",
//     age:50
// };
//Destructing
// let {firstName,lastName}=person;
// console.log(person);
//Destructing is not destructive 
// let {firstName,lastName,country="US"}=person;
// console.log(person);
//Alias
// let {lastName:name}=person;
// console.log(person);

//Destu.. with string
//Create a String
// let name="GurukulTheSchools";
// //Destructing
// let[a1,a2,a3,a4,a5]=name;

//Array destructing
//Create an Array
// const fruits=["Bananas","Oranges","Apples","Mango"];
// //Destructing
// let [fruit1,fruit2]=fruits;
// console.log(fruit1,fruit2);

// //skipping
// const fruits=["Bananas","Oranges","Apples","Mango"];
// //Destructing
// let [fruit1,,,fruit2]=fruits;
// console.log(fruit1,fruit2);

//Create an Array
// const fruits=["Bananas","Oranges","Apples","Mango"];
// //Destructing
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1,fruit2);
// //Rest 
// const numbers=[10,20,30,40,50,60,70];
// const[a,b, ...rest]=numbers;
// console.log(numbers);

// const fruits = new Map([
//         ["Apples",500],
//         ["Bananas",300],
//         ["Oranges",200]
//     ]);
// //des..
// let text ="";
// for (const[key,value]of fruits){
//     text +=key +"is"+value;
// }
// console.log(text);

//
// let x=5;
// let z=x**2;
// console.log(z)
// console.log(x)
//
// let x=5;
// x**=2;
// console.log(x)
//Array includes()
// const fruits=["Bananas","Oranges","Apples","Mango"];
// fruits.includes("Mango");
// //Searching at 3
// const fruits=["Bananas","Oranges","Apples","Mango"];
// fruits.includes("Mango",3);
// console.log(fruits.includes("Mango",3));
//The includes methods are case sensitive

//Trailing Commas
// //they are legal in array literals
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);
// //Sparsh Array
// const sparseArray=[1,,,4,5,,];
// const arr=[,];
// console.log(arr);
// console.log(sparseArray);
// //trailing commas in object
// const person={
//     firstName:"John",
//     lastName:"David",
//     age:30,
// }
// //Sparse object(can not create)
// const person={
//     firstName:"John",
//     ,
//     age:30,
// }
