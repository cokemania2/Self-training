'use strict'
//JavaScript is synchronous.
//Excute the code block in order after hoisting.
//hoisting : var, function declaration 

console.log(1);
setTimeout(function() { //browser API
    console.log(2);
},1000);
//setTimeout(()=> console.log(2),1000);
console.log(3);
// 1 , 3 , 2 

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback
function printWithDealay(print,timeout) {
    setTimeout(print,timeout);
}
printWithDealay(()=>console.log('hello2'),1000);


//callback hell example
class UserStorage {
    loginUser(id,password,onSuccess,onError) {
        setTimeout(()=>{
            
        },2000);
    }
    getRoles (user, onSuccess, onError) {

    }
}