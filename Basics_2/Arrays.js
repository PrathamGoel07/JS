//Arrays

const myArr = [0, 1, 2, 3, 4, 5]    //could also declare boolean and strings at same time with the numbers
const myheroes = ["Ironman","Batman","spiderman","Hulk"]

const myArry2 =new Array(1,2,3,4)

// console.log(myArr[4]);

//Array Methods    ----------------------------------------------

// myArr.push()                 //simply adds values ot the array
// myArr.pop()                 //simply removes the last value of the array
// myArr.unshift()            //simpley adds the number you want to the start of the array
// myArr.shift()             //simply removes the first number of the array and no paramater needed


// myArr.push(6)          //array is 0 1 2 3 4 5 6
// myArr.push(100)       // array is 0 1 2 3 4 5 6 100

// myArr.pop()         //array is 0 1 2 3 4 5 6 

// myArr.unshift(0)     // array is 0 0 1 2 3 4 5 6  
// myArr.shift()          // array becomes 0 1 2 3 4 5 6 100

// console.log(myArr.includes(9));

const newArr =myArr.join()          //convert the array to string

// console.log(myArr);
// console.log(newArr);


//Spilce and Slice in arrays 

console.log("A ",myArr);

const MyNewArr1 = myArr.slice(1, 3)    //it prints from the 1st index to the n-1 index of the value we input in it
//slice doesn't affect the original array in which we made the changes
console.log("Using SLice",MyNewArr1);

console.log("B",myArr);

const MyNewArr2 = myArr.splice(1, 3)     //it also prints from the 1st index to the Nth index of the array for what value we input in it
//Splice does affect the original array through which we used the command 
//It removes the elements that you input in the spilce function and displays the rest of the array in the original one
console.log("Using Splice",MyNewArr2);
console.log("C",myArr);



 



