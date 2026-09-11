//objects can be declared by two types 1.literals 
//                                     2.contructors
//singleton

const mySym = Symbol("key1")

const JsUser = {
    name : "Pratham Goyal",
    "full name" : "Pg",    //Now there is no chance that i can access this by JsUser.full name
    age : 18,
    [mySym]: "mykey1",             // it is original representation for printing some kingd of key and mantain it's datatype to symbol.
    location : "patiala",
    email : "prathamgoyal32@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)            // can also be done by this method
// console.log(JsUser["email"])        // It is the correct representation for calling the object
// console.log(JsUser["full name"])    //The only way ti call the full name
// console.log(JsUser[mySym])

JsUser.email = "pratham@chatgpt.com"
// Object.freeze(JsUser)                //Email freeze hogyi hai mtlb we can't change this
JsUser.email = "pratham@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){                   //Its like ki now Jsuser can also access the greeting part
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){              //for refferencing the name in the object    // Called Stirng Interpulation
     console.log(`Hello JS user, ${this.name}`);           //so first we converted from string to backticks
}                                                          //whenever we have to refer the same object we use this.____

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(`${this.name}`);              //this depends on how a function is called. 
                // Outside a function, it refers to the global object (so this.name is usually undefined).
