"use strict"

// lesson 11

// fetch აბრუნებს პირობას, შედეგს

// promises

fetch( "https://reqres.in/api/users?page=", {
    method: "GET",
})

.then(function(response) {
    return response.json();
})
.then(function (mosuliInfo) {
    console.log(mosuliInfo);
})

.catch(function (error) {
    console.log(error);
});


// 1. pending state
// 2 fulfilled
//    resolve
//     reject



// promise

let lotteryPromise = new Promise(function (resolve,reject) {

    // setTimeout რამდენ წამში გვინდა რომ პასუხი გაეშვას, თუ გვინდა რომ გაეშვას 3 წამში, 3 X 1000 და ჩავწერთ 3000
    
    setTimeout(function() {
    if(Math.random() >= 0.5) {
resolve("you win");
    } else {
        reject("you Lost");
    }
}, 3000);
});

// ეს ააუცილებლად უნდა იყოს წაწერილი then ბლოკში რომ პასუხი დაბრუნდეს, ანუ წარმატებას აბრუნებს then ბლოკში, წარუმატებლობას catch ბლოკში

lotteryPromise
.then((response) => console.log(response))
.catch((responseError) => console.log(responseError));


//

// შევქმნათ პირობა და დავაბრუნოს ფუნქცია

let waitFunction = function(seconds) {
    return new Promise(function (resolve){
        setTimeout(resolve, seconds * 1000);
    });
};

waitFunction(2)
.then(() =>{
    console.log("test1");
    return waitFunction(3);
})
.then(() =>{
    console.log("test2");
});


//  ამოცანა რა თანმიმდევრობით შეასრულებს პირობას

console.log("hello1"); //სინქრონული

let promise = new Promise((resolve, reject) =>{
    console.log("start"); //სინქრონული
    resolve("good evening");
});

promise.then((response) => console.log(response)); //ასინქრონული

console.log("end"); //სინქრონული

//ჯავასკრიპტი ჯერ კითხულობს ასინქრონულს და შემდეგ სინქრონულ პირობას აქედან გამომდინარე, შეასრულებს 

// hello1 --> start --> end --> good evening

// თუ მაგალითად პირობაში არ გვაქვს გაწერილი promise ფუნქცია მაშინ good evening საერთოდ არ გამოჩნდება


// მაგალითი 2

console.log("Academy 1"); //სინქრონული

let promise2 = new Promise ((resolve, reject) => {
    console.log("Academy 2"); //სინქრონული
});

promise2.then((response) => console.log("academy 3")); //ასინქრონული
console.log("academy 4"); //სინქრონული

//ამ მაგალითში academy 3 საერთოდ არ გამოჩნდება რადგან resolve ფუნქცია არ გვიწერია. ამ შემთხვევაში გამოჩნდებია თანმიმდევრობით 
// ademy1, academy2, academy4


// თუ გვჭირდება სხვადასხვა ინფორმაცია სერვერიდან

api (function (result) {
    api2(function (rusult2) {
        api3(function (result3) {
            
        })
    })
})



// async await

function test1 () {
    setTimeout (() => {
        console.log("test1");
    }, 3000 );
}function test2 () {
    setTimeout (() => {
        console.log("test1");
    }, 2000 );
}
async function testFunc() {
    await test1();
    await test2();
}
testFunc();
console.log("hi");


// async with fetch

fetch ("https://reqres.in/api/users?page=", {
    method: "GET",
})

   .then((response) =>{
    return response.json();
})

.then((mosuliInfo) => {
    console.log(mosuliInfo);
});


////

async function testFunctionAsyc(){
let response = await fetch ("https://reqres.in/api/users?page=");
if (response.status !==ok) {
    throw new Error ("can not fetch data");
}
let data = await response.json();
console.log(data);
}
testFunctionAsync()
.then ((mosuliInfoJs) => console.log("mosuli informacia", mosuliInfoJs))
.catch((error) => console.log(error));