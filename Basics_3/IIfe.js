//Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
})();

// first () is the onw where we wrote the define of function and the second 
// one is it's execution

//we can also write this with arrow func

( () => {
    console.log(`DB CONNECTED TWO`);
} )()                    //this won't work as JS don't know where to revoke the function
                          // so for this we have to use ";" at the end 