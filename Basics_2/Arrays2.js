const Marvel = ["Spiderman","Ironman","Thor","CaptainAmerica"]
const DC = ["Batman","Superman","Flash"]


// Marvel.push(DC)

// console.log(Marvel);        //It considered the DC array as a single element

// console.log(Marvel[4][1]);

//concat works but woth a new array 

const newArr = Marvel.concat(DC)
// console.log(newArr);

const new_Arr = [...Marvel,...DC]
// console.log(new_Arr);

// lets say that you have array ladder in them so to make a combined as a single array we can take another array with .flat()
// command and in the function you have to put the depth of the array or simply you can out infinity


console.log(Array.isArray("Pratham"));
console.log(Array.from("Pratham"));      //converts the strings into arrays
console.log(Array.from({name: "Pratham"}));               // will return a empty array 


let score1 =100
let score2 =200
let score3 =300
//to convert them into array 
console.log(Array.of(score1,score2,score3));


