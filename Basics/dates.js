//dates 

let mydate = new Date()
// console.log(mydate.toString());       // ri Apr 10 2026 11:45:20 GMT+0530 (India Standard Time)

// console.log(mydate.toDateString());   //Fri Apr 10 2026

// console.log(mydate.toISOString());       //2026-04-10T06:17:37.937Z


// console.log(mydate.toLocaleString());      //4/10/2026, 11:49:02 AM

// console.log(mydate.toJSON());              //2026-04-10T06:19:44.147Z


// console.log(typeof mydate);                 //object 

  
// date typing formats


// let MyCreatedDate = new Date(2023, 0, 23)                     
// let MyCreatedDate = new Date (2023 ,0, 23, 5, 3)
// let MyCreatedDate = new Date("2023-01-13")
let MyCreatedDate = new Date("02-07-2007")
// console.log(MyCreatedDate.toString());


// let MyTimeStamp = Date.now()
// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime().toLocaleString())

console.log(Math.floor(Date.now()/1000));            //to convert the time into seconds as it was earlier in milliseconds


let newdate = new Date()
// console.log(newdate);
// console.log(newdate.getUTCMonth());       //remember months zero se start honge😁
                                            // usually log ().getMonth + 1) kr dete hai to get the excat month
// console.log(newdate.getDate());
// console.log(newdate.getDay());



// to get complex date for something specific we usually do string interpulation
  

// `${newdate.getDay() and the time is // like this we input the values}`


newdate.toLocaleString('default',{
 year: "2-digit" 
})

console.log(newdate);

