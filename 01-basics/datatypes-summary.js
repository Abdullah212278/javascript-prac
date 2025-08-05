// primirtive 


// 7 types : string, number, boolean, null. undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp  = null
let userEmail;

const id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(id === anotherId);

const bigNumber = 8329832784329828378392728065n

// reference (non primitive)

// array objects functions


const heroes = ["quaid e azam", "allama iqbal"]
let myObj = {
     name: "Abdullah",
     age: 16,
}


const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++

// Stack (Permitive), Heap (Non-Permitive)

let myYoutubeName = "Abdullah.com"

let anotherName = myYoutubeName
anotherName = "babu"

console.log(anotherName);
console.log(myYoutubeName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "abdullah"

console.log(userOne.email);
console.log(userTwo.email);
