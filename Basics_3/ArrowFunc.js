const user =
{
    username: "Pratham Goyal",
    price: 999,

    WelcomeMessage: function()
    {
        console.log(`${this.username} , Welcome to the website`);
        // console.log(this);
        
}               // (this.) refers to the current context basically 
}

// user.WelcomeMessage()
// user.username = "Sam"
// user.WelcomeMessage()

// console.log(this);

// function porn()
// {
//     console.log(this);
    
// }

// porn()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"              //this is the arrow function
    console.log(this);
}

// chai()


const addTwo  = (num1, num2) =>
{
    return num1 + num2                       //there is another method too
}



// Another method


const addTwo = (num1, num2) => num1 + num2

                     //OR

const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Pratham"})

console.log(addTwo(63, 6));
