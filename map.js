//Create a MAP
const Fruits = new Map([
    ["Apples",500],
    ["Bananas",300],
    ["Oranges",200]
]);
console.log(Fruits);

//Create a Map
const fruits = new Map();

    //Set Map values
    fruits.set("Apples",500);
    fruits.set("Bananas",300);
    fruits.set("Oranges",200);
    fruits.set("mangoes",350);
    console.log(fruits);
    //the set() methi can be used to change existing map values
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
let total=0;
for(const x of fruits.values()){
    total+=x;
}
console.log(total);