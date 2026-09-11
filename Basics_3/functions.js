function MyName() {
console.log("P");
console.log("R");
console.log("A");
console.log("T");
console.log("H");
console.log("A");
console.log("M");
}

// MyName()


//Function1

// function addition(number1, number2)          //here the values that we write are called parameters
// {
//  console.log(number1 + number2);
// }


//Funtion2

function addition(number1, number2)          
{
// let result = number1 + number2               //funtions mei retrun statement ke baad kuch console log nhi hota
// return result

return number1 + number2                //simply return mei dono numbers bhi de skte hai and wo ek variable mei store ho jaate hai. 

}

// addition(3,4)                         // 7                   //These are the arguments that we pass
// addition(3,"4")                       // 34
// addition(3,"a")                       // 3a  
// addition(3,null)                      // 3

//something crazyy now 

const result = addition(6,9)
console.log("Result: ", result);         //Result: Undefined aya hai with Function1
                                        // but ab result 15 aayega with funtion2

//It doesn't mean ki jo console log in function wapis bhej rha hai wahi result mei bhi aayega
//It deosn't mean that funtion wo value return bhi karega


function loginUser(username)
{
    return `${username} just logged in.`
}

// console.log(loginUser("Pratham"));
console.log(loginUser());                 //agar koi value hi paas na karein toh result will be:
                                         //  "Undefined jsut logged in".



const newarray = [100, 200, 300, 400]

function ReturnTheArray(getArray)
{
    return getArray[0]
}
console.log(ReturnTheArray(newarray));

function CalculateCartPrice(...num1){       // (...) is called the "rest" as well as "spread"
                                        //operator. rest operator ek array bna kr deta hai
    return num1
}

console.log(CalculateCartPrice(200, 400, 500));


//How to pass an object in a function

const user = 
{
    username : "Pratham",
    price : 199
}

function HandleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and the price tag is ${anyobject.price}`);
    
}

// HandleObject(user)
// Antoher Method 

HandleObject({
    username: "Palak",
    Price: 299
})

//To pass an Array to a function

const MyNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(MyNewArray));
