const userEmail = "prathamgoyal32@gmail.com"

if(userEmail){
    console.log("Got user Email");
} else{
    console.log("Don;t have an Email");
}


//----------Falsy Values----------(the values that are always considered as false)

//   False, 0, -0, BigInt 0n, "", null, undefined, Nan(not a number)


// ------------Truthy Values---------------(the values that are always considered as truth)
// "0", 'false', " ", [], {}, function(){}

//---------------To check an empty Array or Object----------------
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")