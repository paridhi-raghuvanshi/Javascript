// //Callbacks
// //just a function that take another function as an aguement
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
//}
// doSomething()

// function judge(grade){
//     switch(true){
//         case grade=="A":
//              console.log("You got an",grade,":amazing!");
//              break;
//         case grade=="B":
//              console.log("You got an",grade,":well done");
//              break;
//         case grade=="C":
//              console.log("You got an",grade,":all right!");
//              break;
//         case grade=="D":
//              console.log("You got an",grade,":hmmm!");
//              break;
//         default:
//              console.log("An",grade,":what!?");
//     }
// }
// function getGrade(score,callback){
//     let grade;
//     switch(true){
//         case score>=90:
//              grade="A";
//              break;
//         case score>=80:
//              grade="B";
//              break;
//         case score>=70:
//              grade="C";
//              break;
//         case score>=60:
//              grade="D";
//              break;
//         default:
//             grade="F"
//     }
//     callback(grade);
// }
// getGrade(85,judge);

// //PROMISE
// let promise = new Promise(function(resolve,reject){
//      let x =20;
//      if(x>10){
//          resolve(x);
//      }else{
//          reject("too low");
//      }
 
//  });
 
//  promise.then(
//      function(value){
//          console.log("success",value);
//      }
//      function(error){
//          console.log("error:",error);
//      }
//  );


const promise = new Promise((resolve,reject)=>{
     // resolve("success");
     reject("fool");
 })
 .then(value =>{
     console.log(value);
     return"we";
 })
 .then(value =>{
     console.log(value);
     return"can";
 })
 .then(value =>{
     console.log(value);
     return"chain";
 })
 .then(value =>{
     console.log(value);
     return"promises";
 })
 .then(value =>{
     console.log(value);
     
 })
 .catch(value =>{
     console.log(value);
     
 })

 