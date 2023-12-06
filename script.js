"use strict"

// lesson 11

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

lotteryPromise
.then((response) => console.log(response))
.catch((responseError) => console.log(responseError));