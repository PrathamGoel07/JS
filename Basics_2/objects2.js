const appuser = new Object()
//const appuser ={}               //fucking same things

appuser.id = "123abc"
appuser.name = "Pratham"
appuser.isLoggesIn = false

// console.log(appuser);

const user2 = {
email: "pratham@gmail.com",                  //nested objects
fullname: {
    username: {
        firstname: "Pratham",
        lastname: "Goyal",
    }
 }
}

// console.log(user2.fullname?.username.lastname);      

// "?" isiliye lgta hai becz when we get req from the APIs there we use this syntax
//else we hve to sue the classic if-else statements


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                        //one way to merge two objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)   //can also use parenthesis which indicates the result to be perfect

const obj3 = { ...obj1, ...obj2}                      //another reperesentation to merge the objects

// console.log(obj3);

const users =[
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
// console.log(Object.keys(appuser));
// console.log(Object.values(appuser));
// console.log(Object.entries(appuser));

// console.log(appuser.hasOwnProperty('isLogges'));

// destructuring of objects

const course = {
    coursename: "Pratham",
    price: "0",
    Courseinstructor: "Also Pratham",
}

// course.coursename

const {Courseinstructor: instructor}= course    //destructured the name of Courseinstructor to jsut instructor

// console.log(Courseinstructor);
console.log(instructor);


//JSON

{
    "name": "Pratham Goyal",
    "course": "JS",
    "Price": "free"
}



