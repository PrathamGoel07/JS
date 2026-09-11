"use strict"; //to treat the code as newer version of JS 
//  alert (3+3)  // we are using node js not the browser console





// number 
//bigint
//string
//boolean
//null
//undefined
//symbol



//object

// console.log(typeof "Pratham ")
// console.log(typeof undefined)   //undefiend
// console.log(typeof null)        //object



//Memory 



//stack(for primitive) and heap(for non primitive)


//stack memory emi varibale ak copy milta hai\
// and heap memory mei uska reference 




let myyoutubename="PrathamGoyal"

let anothername= myyoutubename
anothername="pgoyal"

// console.log(myyoutubename);
// console.log(anothername);



let userOne = {
    email : "prathamgoyal32@gmail.com",
    upi : "pgoyal@sbl",
}

let userTwo = userOne 

userOne.email="pgoyal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
