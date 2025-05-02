// //Callbacks
// //just a function that take another function as an aguement
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
// console.log("I am PAridhi");
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


// const promise = new Promise((resolve,reject)=>{
//      // resolve("success");
//      reject("fool");
//  })
//  .then(value =>{
//      console.log(value);
//      return"we";
//  })
//  .then(value =>{
//      console.log(value);
//      return"can";
//  })
//  .then(value =>{
//      console.log(value);
//      return"chain";
//  })
//  .then(value =>{
//      console.log(value);
//      return"promises";
//  })
//  .then(value =>{
//      console.log(value);
     
//  })
//  .catch(value =>{
//      console.log(value);
     
//  })

//ASYNC AWAIT
// with async keyword, we can make a function return a promise. this make the promises nicer to read and look a lot like synchronous code. more poerful await keyword to wait untill the promise is done. awiats only works in an synchronous function
// function saySomething(x){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("Something"+x);
//         },2000);
//     });
// }
// async function talk(x){
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//EVENT LOOP
//JS is a singlr threaed language. a thread in this context eans a path of execution. if there is only a single path, this means that tasks will have to wait for one another and only one thing can happen at a time.this single executoe is the event loop.
//Stack if LIFO
//Queue is FIFO
// console.log("Hi there");
// add(4,5);
// console.log(add(4,5))

// function add(x,y){
//     return x=y;
// }

console.log("Hi there");
setTimeout(()=>console.log("Sorry I am late"),1000);
console.log(add(4,5));

function add(x,y){
    return x+y;
}
//setTimeout() task ets out source to the browser's web API.when its done, this appears in a special place: the callback queue.when the call stack is empty, the event

console.log("Hi there");
setTimeout(()=>console.log("Sorry I am late"),0);
console.log(add(4,5));
